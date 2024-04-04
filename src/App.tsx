import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components /BoardComponent';
import { Board } from './models/Board';
import { Colors } from './models/Colors';
import { Player } from './models/Player';
import LostFigures from './components /LostFigures';
import Timer from './components /Timer';
import { GameOver } from './components /GameOver/GameOver';

const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(()=>{
    setCurrentPlayer(whitePlayer)
    
    restart()
  },[])

  function restart(){
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard)
  }

  function swapPlayer (){
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
  }

  return (
    gameOver
      ? <GameOver />
      : (
        <div className='app'>
          <Timer 
            restart={restart}
            currentPlayer={currentPlayer}
          />
          <BoardComponent 
            board={board} 
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            swapPlayer={swapPlayer}
          />
          <div> 
            <LostFigures setGameOver={setGameOver} title='Black figures' figures={board.lostBlackFigures}/>
            <LostFigures setGameOver={setGameOver} title='White figures' figures={board.lostWhiteFigures}/>
          </div>
        </div>
      )
  );  
};


export default App;