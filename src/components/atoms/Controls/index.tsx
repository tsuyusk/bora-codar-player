import * as S from './styles';
import playBack from '../../../assets/icons/play-back.svg';
import playForward from '../../../assets/icons/play-forward.svg';
import play from '../../../assets/icons/play.svg';
import pause from '../../../assets/icons/pause.svg';

interface ControlsProps {
  isRunning: boolean;
  handleSwitchPlaying(): void;
}

export const Controls: React.FC<ControlsProps> = ({ isRunning, handleSwitchPlaying }) => {
  return (
    <S.Container>
      <button>
        <img src={playBack} alt="Play Back" />
      </button>

      <button onClick={handleSwitchPlaying}>
        {isRunning
        ? <img src={pause} alt="Pause" />
        : <img src={play} alt="Play" />}
      </button>

      <button>
        <img src={playForward} alt="Play Forward" />
      </button>
    </S.Container>
  )
}