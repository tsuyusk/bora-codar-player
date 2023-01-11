import { Music } from '../../../types/Music';
import * as S from './styles';

interface AlbumCoverProps {
  music: Music;
  imgSize: string;
  row: boolean;
}

export const AlbumCover: React.FC<AlbumCoverProps> = ({ music, imgSize, row }) => {
  return (
    <S.Container row={row} imgSize={imgSize}>
      <img src={music.image} alt="'Acorda Devinho' Album Cover" />

      <div>
        <h1>{music.title}</h1>
        <h2>{music.band}</h2>
      </div>
    </S.Container>
  )
}
