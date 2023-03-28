import React,{FC, Fragment, useState} from 'react';
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
        setSelectedCell(cell);
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