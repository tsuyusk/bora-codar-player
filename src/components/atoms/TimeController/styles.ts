import styled from 'styled-components';
import { transparentize } from 'polished'; 'polished';

export const Container = styled.div`
  width: 100%;

`;

interface SliderProps {
  percentage: number;
}

export const Slider = styled.div<SliderProps>`
  height: 6px;
  width: 100%;
  border-radius: 9.6px;
  background: ${props => transparentize(0.4, props.theme.white[300])};
  
  > div {
    height: 100%;
    width: ${props => props.percentage}%;
    border-radius: 9.6px;
    background: ${props => props.theme.white[300]};
  }
`;

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;


  margin-top: 9.6px;
  width: 100%;
  font-size: 14.4px;

  color: ${props => transparentize(0.4, props.theme.white[300])};

  > span {
    user-select: none;
  }
`;
