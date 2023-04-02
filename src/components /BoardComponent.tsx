import React,{FC, Fragment, useEffect, useState} from 'react';
import CellComponent from './CellComponent';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import { Player } from '../models/Player';

interface BoardProps {
    board: Board;
    setBoard: (bord: Board) => void;
    currentPlayer: Player | null;
    swapPlayer: ()=>void;
}



const BoardComponent: FC<BoardProps>  = ({board ,setBoard,currentPlayer,swapPlayer }:BoardProps) => {

    const [selectedCell,setSelectedCell] = useState<Cell | null>(null);

    function click (cell:Cell){
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null)
        } else {
            if(cell.figure?.color === currentPlayer?.color){
                setSelectedCell(cell)
            }
        }
    }   


    useEffect(()=>{
        hightLightCells();
    },[selectedCell])

    function hightLightCells(){
        board.hightlightCells(selectedCell)
        updateBoard();
    }

    function updateBoard(){
        const newBoard = board.getCopyBoard();
        setBoard(newBoard)
    }


    return (
        <div className='board'>
            {board.cells.map((row,index)=>
                <Fragment key={index}>
                    {row.map(cell=>
                        <CellComponent 
                        click={click}
                        cell={cell} 
                        key={cell.id} 
                        selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}/>
                        )}
                </Fragment>
            )}
        </div>
    );
};

export default BoardComponent;