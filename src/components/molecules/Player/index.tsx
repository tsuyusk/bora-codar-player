import React, { useRef, useMemo, useState, useCallback, useEffect } from 'react'
import { Music } from '../../../types/Music';
import { AlbumCover } from '../../atoms/AlbumCover';
import { Controls } from '../../atoms/Controls';
import { TimeController } from '../../atoms/TimeController';  

import * as S from './styles';

interface PlayerProps {
  row?: boolean;
  shouldShowControls?: boolean;
  shouldShowTimeController?: boolean;
}

import mxmtoon from '../../../assets/songs/mxmtoon.jpg';
import cliche from '../../../assets/songs/cliche.mp3';

import cloud9album from '../../../assets/songs/cloud9.webp';
import cloud9 from '../../../assets/songs/cloud9.mp3';

import tvgirl from '../../../assets/songs/tvgirl.jpeg';
import cigarettesOutWindow from '../../../assets/songs/cigarettes.mp3';

const musics: Music[] = [
  {
    band: 'Mxmtoon',
    duration: 186,
    image: mxmtoon,
    song: cliche,
    title: 'Cliché',
  },
  {
    band: 'TV Girl',
    duration: 198,
    image: tvgirl,
    song: cigarettesOutWindow,
    title: 'Cigarettes Out Window',
  },
  {
    band: 'Beach Bunny',
    duration: 153,
    image: cloud9album,
    song: cloud9,
    title: 'Cloud 9',
  },
];

export const Player: React.FC<PlayerProps> = ({ row = false, shouldShowControls = true, shouldShowTimeController = true }) => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const audio = useRef(new Audio());

  const [selectedIndex, setSelectedIndex] = useState(0);

  const music = useMemo(() => {
    return musics[selectedIndex];
  }, [selectedIndex, musics]);

  const moveQuery = useCallback((direction: string) => {
    if (direction === 'forward') {
      setSelectedIndex(
        state => {
          const newState = state + 1;
  
          if (newState > musics.length - 1) {
            return 0;
          }
  
          return newState;
        }
      );

      return;
    }

    setSelectedIndex(
      state => {
        const newState = state - 1;

        if (newState < 0) {
          return musics.length - 1;
        }

        return newState;
      }
    );
  }, []);

  const handleSwitchPlaying = useCallback(() => {
    setIsRunning(state => !state);
  }, []);

  const handleElapseTime = useCallback(() => {
    // 0.1 so the progress bar is smoother
    setElapsedTime(state => state + 0.1);
  }, []);

  useEffect(() => {
    audio.current.src = music.song;

    if (isRunning) {
      audio.current.currentTime = elapsedTime;
  
      audio.current.play()
      return;
    }

    audio.current.pause();
  }, [music, isRunning]);

  useEffect(() => {
    setElapsedTime(0);
  }, [music]);

  return (
    <S.Container row={row}>
      <AlbumCover music={music} imgSize={row ? '84.03' : '189.66'} row={row} />

      {shouldShowControls && (
        <>
          {row
          ? (
            <S.ControlsWrapper>
              <Controls moveQuery={moveQuery} isRunning={isRunning} handleSwitchPlaying={handleSwitchPlaying} />  
            </S.ControlsWrapper>
          )
          : <Controls moveQuery={moveQuery} isRunning={isRunning} handleSwitchPlaying={handleSwitchPlaying} />}
        </>
      )}

      {shouldShowTimeController && (
        <TimeController elapsedTime={elapsedTime} onElapseTime={handleElapseTime} timeInSeconds={music.duration} isRunning={isRunning} />
      )}
  </S.Container>
  )
}
