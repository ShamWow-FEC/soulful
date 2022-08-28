import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  margin: auto;
  width: 60vw;
  height: 60vw;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  & .icon-expanded {
    position: absolute;
    z-index: 100;
    color: black;
    width: 30px;
    height: 30px;
    cursor: pointer;
  };
  & .exit-icon {
    top: 5%;
    right: 5%;
    & :hover {
      opacity: 0.4;
    }
  };
  & .left-arrow-expanded {
    top: 50%;
    left: 5%;
  };
  & .right-arrow-expanded {
    top: 50%;
    right: 5%;
  };
  @media(max-width: 500px) {
    width: 100%;
  }
  @media(min-width: 1200px) {
    width: 90%;
    height: 90%;
  }
`;

export const NavSymbols = styled.div`
  display: grid;
  margin-top: 2.5vh;
  width: 100%;
  height: max-content;
  gap: 5px;
  grid-auto-flow: column;
  grid-template-rows: max-content;
  grid-auto-columns: max-content;
  justify-content: center;
  align-content: end;
  justify-items: center;
  align-items: center;
  user-select: none;
  & .nav-symbols-circles {
    fill: #D5BDAF;
    cursor: pointer;
  };
`;

export const Image = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  user-select: none;
  cursor: crosshair;
`;
