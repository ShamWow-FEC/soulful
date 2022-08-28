import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 9;
  position: absolute;
  z-index: 100;
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: repeat(3, max-content);
  grid-template-columns: max-content;
  align-content: center;
  justify-content: center;
  justify-items: center;
  align-items: center;
  & .arrows-thumbnail {
    width: 50px;
  };
`;

export const ThumbnailsGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-height: 95%;
  min-width: 1fr;
  grid-template-columns: max-content;
  grid-template-rows: repeat(auto-fill, max-content);
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  gap: 6px;
`;

export const ThumbnailImage = styled.img`
  min-height: 45px;
  min-width: 45px;
  height: 4.5vw;
  width: 4.5vw;
  object-fit: cover;
  cursor: pointer;
  box-shadow: -5px 5px 5px #D6CCC2;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 1500px) {
    height: 70px;
    width: 70px;
  }
`;
