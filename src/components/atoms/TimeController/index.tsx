import React, { useMemo, useEffect, useState } from 'react'
import { secondsToMinutes } from '../../../utils/secondsToMinutes';
import { setInterval } from '../../../utils/setInterval';
import * as S from './styles'

interface TimeControllerProps {
  isRunning: boolean;
  timeInSeconds?: number;
}

export const TimeController: React.FC<TimeControllerProps> = ({ isRunning, timeInSeconds = 200 }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const { clear } = setInterval(() => {
      if (!isRunning) {
        return
      }
      if (elapsedTime >= timeInSeconds)  {
        clear();
        return;
      }

      setElapsedTime(state => state + 0.1);
    }, 100);

    return () => {
      clear();
    }
  }, [elapsedTime, isRunning]);

  const remainingTime = useMemo(() => {
    return timeInSeconds - elapsedTime;
  }, [timeInSeconds, elapsedTime]);

  const elapsedTimePercentage = useMemo(() => {
    return ((elapsedTime / timeInSeconds) * 100);
  }, [elapsedTime, timeInSeconds]);
  
  return (
    <S.Container>
      <S.Slider percentage={elapsedTimePercentage}>
        <div />
      </S.Slider>

      <S.Labels>
        <span>{secondsToMinutes(timeInSeconds)}</span>
        
        <span>{secondsToMinutes(remainingTime)}</span>
      </S.Labels>
    </S.Container>
  )
}