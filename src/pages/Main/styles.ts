import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  > section {
    display: grid;
    grid-template-areas: 
      "a b"
      "a c";
    gap: 32px;
    height: 498px;

    > div {
      &:nth-child(1) {
        grid-area: a;
      }

      &:nth-child(2) {
        grid-area: b;
      }

      &:nth-child(3) {
        grid-area: c;
      }
    }
  }

  @media (max-width: 660px) {
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

`;
