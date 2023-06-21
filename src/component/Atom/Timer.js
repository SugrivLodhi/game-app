import React, { useEffect } from 'react';
import './timer.css'
import { timeFormater } from '../../utills/untility';
const Timer = ({ isPaused, seconds, setSeconds }) => {
  useEffect(() => {
    if (isPaused) {
      const timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }

  }, [isPaused, setSeconds]);
  const time = timeFormater(seconds)
  return (
    <span className='timer'>
      {`${time?.hours} : ${time?.minutes} : ${time?.remainingSeconds}`}
    </span>
  );
}

export default Timer;
