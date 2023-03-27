import React, { FC } from 'react';
import { Cell } from '../models/Cell';

interface CellProps {
    cell: Cell
}


const CellComponent:FC<CellProps> = ({cell}:CellProps) => {
    return (
        <div className={['cell', cell.color].join(' ')}>
            {cell.figure?.logo && <img src={cell.figure.logo}></img> }
        </div>
    );
};

export default CellComponent;