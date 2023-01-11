import styled, { css } from 'styled-components';

interface ContainerProps {
  imgSize: string;
  row: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  user-select: none;

  width: 100%;
  
  ${props => !props.row && css`
    flex-direction: column;
  `}

  > img {
    width: ${props => props.imgSize};
    height: ${props => props.imgSize};
    border-radius: 6px;
    
    pointer-events: none;
  }

  > div {
    ${props => props.row
    ? css`
      margin: 15.71px 0 15.71px 28.81px;
    `
    : css`
      margin-top: 28.81px;
    `}

    > h1 {
      font-size: 24.01px;
    }

    > h2 {
      font-size: 19.21px;
      font-weight: 400;
      opacity: 0.67;
    }
  }
`;
