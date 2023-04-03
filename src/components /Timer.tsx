import React, { FC, useEffect, useRef, useState } from 'react';
import { Player } from '../models/Player';
import { Colors } from '../models/Colors';
import './Button.css'



interface TimerProps {
    currentPlayer: Player | null;
    restart: ()=> void;
}



const Timer:FC<TimerProps> = ({currentPlayer, restart}) => {

    const [blackTime,setBlackTime] = useState(1800);
    const [whiteTime,setWhiteTime] = useState(1800);

    const timer = useRef<null | ReturnType <typeof setInterval>> (null);

    useEffect(()=>{
        startTimer();
    },[currentPlayer])

    function startTimer (){
        if (timer.current){
            clearInterval(timer.current)
        }
        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback,1000)
    }
    function decrementBlackTimer(){
        setBlackTime(prev=>prev-1)
    }
    function decrementWhiteTimer(){
        setWhiteTime(prev=>prev-1)
    }

    const handleRestart = ()=>{
        setBlackTime(1800);
        setWhiteTime(1800);
        restart()
    }
    return (
        <div>

            <div className="buttons">
                <button onClick={handleRestart} className="btn"><span></span><p data-start="good luck!" data-text="restart!" data-title="new game"></p></button>
            </div>
          
            <h2>
                Black <br />
                seconds = {blackTime%60} <br />
                minutes = {Math.floor((blackTime/60)%60) }
            </h2>

            <h2>
                White <br />
                seconds = {whiteTime%60} <br />
                minutes = {Math.floor((whiteTime/60)%60) }
            </h2>

        </div>
    );
};

export default Timer;