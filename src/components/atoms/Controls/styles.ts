import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  transition: opacity .5s ease-out;
  pointer-events: none;

  &:hover > button {
    opacity: 0.5;
  }

  > button {
    background: transparent;
    border: 0;
    transition: opacity .5s ease-out;
    pointer-events: auto;
    
    > img {
      width: 28.81px;
      height: 28.81px;
      pointer-events: none;
      user-select: none;
    }

    &:hover {
      opacity: 1;
    }
  }
`;
