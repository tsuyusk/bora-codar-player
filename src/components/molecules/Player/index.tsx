import React, { useState, useCallback } from 'react'
import { Music } from '../../../types/Music';
import { AlbumCover } from '../../atoms/AlbumCover';
import { Controls } from '../../atoms/Controls';
import { TimeController } from '../../atoms/TimeController';
import * as S from './styles';

interface PlayerProps {
  row?: boolean;
  shouldShowControls?: boolean;
  shouldShowTimeController?: boolean;
  music: Music;
}

export const Player: React.FC<PlayerProps> = ({ music, row = false, shouldShowControls = true, shouldShowTimeController = true }) => {
  const [isRunning, setIsRunning] = useState(true);

  const handleSwitchPlaying = useCallback(() => {
    setIsRunning(state => !state);
  }, []);


  return (
    <S.Container row={row}>
      <AlbumCover music={music} imgSize={row ? '84.03' : '189.66'} row={row} />

      {shouldShowControls && (
        <>
          {row
          ? (
            <S.ControlsWrapper>
              <Controls isRunning={isRunning} handleSwitchPlaying={handleSwitchPlaying} />  
            </S.ControlsWrapper>
          )
          : <Controls isRunning={isRunning} handleSwitchPlaying={handleSwitchPlaying} />}
        </>
      )}

      {shouldShowTimeController && (
        <TimeController timeInSeconds={music.duration} isRunning={isRunning} />
      )}
  </S.Container>
  )
}
