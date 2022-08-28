import styled from 'styled-components';

export const SubWrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: grid;
  height: 50vw;
  max-height: 60vh;
  min-height: 550px;
  min-width: 100%;
  grid-template-columns: repeat(14, 1fr);
  grid-template-rows: repeat(8, 1fr);
  justify-self: center;
  justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center;
  user-select: none;
  & .arrows-default {
    position: absolute;
    z-index: 70;
    height: 3vh;
    width: 3vh;
    min-height: 20px;
    min-width: 20px;
    grid-row: 4 / 6;
    cursor: pointer;
  };
`;

export const Image = styled.img`
  position: absolute;
  z-index: 50;
  grid-row: 1 / 9;
  grid-column: 3 / 15;
  height: 100%;
  width: 100%;
  object-fit: contain;
  cursor: zoom-in;
  user-select: none;
`;

export const Wrapper = styled.div`
  height: max-content;
  width: 100%;
  user-select: none;
  @media(max-width: 900px) {
    background: #F5EBE0;
    padding: 2.5%;
  }
`;
