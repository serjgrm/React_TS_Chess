import React,{FC, Fragment, useEffect, useState} from 'react';
import CellComponent from './CellComponent';
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';

interface BoardProps {
    board: Board;
    setBoard: (bord: Board) => void;
}



const BoardComponent: FC<BoardProps>  = ({board ,setBoard }:BoardProps) => {

    const [selectedCell,setSelectedCell] = useState<Cell | null>(null);

    function click (cell:Cell){
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)){
        // if (selectedCell){ Simplified way
            selectedCell.moveFigure(cell);
            setSelectedCell(null)
            updateBoard();
        } else {
            setSelectedCell(cell)
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