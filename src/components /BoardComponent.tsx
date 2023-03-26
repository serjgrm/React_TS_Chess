import React,{FC, Fragment} from 'react';
import CellComponent from './CellComponent';
import { Board } from '../models/Board';


interface BoardProps {
    board: Board;
    setBoard: (bord: Board) => void;
}


const BoardComponent: FC<BoardProps>  = ({board ,setBoard }:BoardProps) => {
    return (
        <div className='board'>
            {board.cells.map((row,index)=>
                <Fragment key={index}>
                    {row.map(cell=>
                        <CellComponent cell={cell} key={cell.id}/>
                        )}
                </Fragment>
            )}
            
        </div>
    );
};

export default BoardComponent;