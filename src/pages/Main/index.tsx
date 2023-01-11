import * as S from './styles';
import { Player } from '../../components/molecules/Player';
import { useMemo } from 'react';

import albumCoverImg from '../../assets/album-cover.png';
import { Music } from '../../types/Music';

export function Main() {
  const music = useMemo<Music>(() => {
    return {
      title: 'Acorda Devinho',
      band: 'Banda Rocketseat',
      duration: 200,
      image: albumCoverImg
    }
  }, []);

  return (
    <S.Container>
      <div>
        <Player music={music} />

        <Player row={true} music={music} />

        <Player row={true} shouldShowTimeController={false} music={music} />
      </div>
    </S.Container>
  )
}

