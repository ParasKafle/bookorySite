import React from 'react';
import { useState, useEffect } from 'react';

const CountDownTimer = ({hoursMinSecs}) => {
   
    const {hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = useState([hours, minutes, seconds]);
    

    const tick = () => {
   
        if (hrs === 0 && mins === 0 && secs === 0) 
            reset()
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };


    const reset = () => setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);

    
    useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });

    
    return (
        <div className='absolute w-56 flex justify-between -mt-[190px] ml-[440px] text-3xl font-semibold px-10 py-2 bg-yellow-400 rounded-full'>
            <p>{`${hrs.toString().padStart(2, '0')}`}</p>:
            <p>{`${mins.toString().padStart(2, '0')}`}</p>:
            <p>{`${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );
}

export default CountDownTimer;