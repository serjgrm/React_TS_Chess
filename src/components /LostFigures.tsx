import React, {Dispatch, FC, SetStateAction, useEffect} from 'react';
import {Figure} from "../models/figures/Figure";
import { King } from '../models/figures/King';

interface LostFiguresProps {
  title: string;
  figures: Figure[],
  setGameOver: Dispatch<SetStateAction<boolean>>
}

const LostFigures: FC<LostFiguresProps> = ({title, figures, setGameOver}) => {

  if (figures.some(figure => figure instanceof King)) {
    setGameOver(true)
  }

  return (
    <div className="lost">
      <h3>{title}</h3>
      {figures.map(figure =>
        <div key={figure.id}>
          {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo}/>}
        </div>
      )}
    </div>
  );
};

export default LostFigures;