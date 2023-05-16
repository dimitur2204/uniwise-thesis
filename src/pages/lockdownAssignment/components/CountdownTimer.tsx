import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ hours, minutes, seconds }) => {
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        if (prevRemainingTime === 0) {
          clearInterval(timer); // Stop the timer when it reaches zero
          return 0;
        }
        return prevRemainingTime - 1;
      });
    }, 1000);

    setRemainingTime(totalSeconds);

    return () => {
      clearInterval(timer);
    };
  }, [hours, minutes, seconds]);

  const formatTime = (time: number): string => {
    return time.toString().padStart(2, '0');
  };

  const formattedHours = formatTime(Math.floor(remainingTime / 3600));
  const formattedMinutes = formatTime(Math.floor((remainingTime % 3600) / 60));
  const formattedSeconds = formatTime(remainingTime % 60);

  return (
    <div>
      <span>{formattedHours}:</span>
      <span>{formattedMinutes}:</span>
      <span>{formattedSeconds}</span>
    </div>
  );
};

export default CountdownTimer;
