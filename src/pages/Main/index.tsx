import * as S from './styles';
import { Player } from '../../components/molecules/Player';

export function Main() {
  return (
    <S.Container>
      <section>
        <Player />

        <Player row={true} />

        <Player row={true} shouldShowTimeController={false} />
      </section>
    </S.Container>
  )
}

