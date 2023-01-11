import * as S from './styles';
import { Player } from '../../components/molecules/Player';

export function Main() {
  return (
    <S.Container>
      <div>
        <Player />

        <Player row={true} />

        <Player row={true} shouldShowTimeController={false} />
      </div>
    </S.Container>
  )
}

