import React, { useMemo, useEffect } from 'react'
import { secondsToMinutes } from '../../../utils/secondsToMinutes';
import { setInterval } from '../../../utils/setInterval';
import * as S from './styles'

interface TimeControllerProps {
  isRunning: boolean;
  elapsedTime: number;
  onElapseTime(): void;
  musicDuration?: number;
}

export const TimeController: React.FC<TimeControllerProps> = ({ elapsedTime, onElapseTime, isRunning, musicDuration = 200 }) => {
  const remainingTime = useMemo(() => {
    return musicDuration - elapsedTime;
  }, [musicDuration, elapsedTime]);

  const elapsedTimePercentage = useMemo(() => {
    return ((elapsedTime / musicDuration) * 100);
  }, [elapsedTime, musicDuration]);

  useEffect(() => {
    const { clear } = setInterval(() => {
      if (!isRunning) {
        return
      }
      if (elapsedTime >= musicDuration)  {
        clear();
        return;
      }

      onElapseTime();
    }, 100);

    return clear;
  }, [elapsedTime, isRunning, onElapseTime]);


  return (
    <S.Container>
      <S.Slider percentage={elapsedTimePercentage} />

      <S.Labels>
        <span>{secondsToMinutes(musicDuration)}</span>
        
        <span>{secondsToMinutes(remainingTime)}</span>
      </S.Labels>
    </S.Container>
  )
}
