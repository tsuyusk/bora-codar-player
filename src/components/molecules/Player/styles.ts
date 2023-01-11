import { lighten } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  row: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  background: ${props => props.theme.primary[400]};
  border-radius: 9.6px;

  transition: background .5s ease-out;

  ${props =>
    props.row
    ? css`
      width: 357.71px;
      padding: 28.81px;
    `
    : css`
      padding: 50.95px 38.41px;
      width: 266px;
    `}

  &:hover {
    background: ${props => lighten(0.04, props.theme.primary[400])};
  }

  @media (max-width: 420px) {
    width: 100%;
    padding: 28.81px;
  }
`;

export const ControlsWrapper = styled.div`
  width: 60.4%;
  margin: 0 auto;
`;

