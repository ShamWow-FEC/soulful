import styled from 'styled-components';

export const StyleSelectorGrid = styled.div`
  display: grid;
  width: min(100%);
  grid-template-columns: repeat(4, max-content);
  gap: 15px;
  grid-auto-rows: max-content;
  margin-top: 2vh;
  @media(max-width: 900px) and (min-width: 501px) {
    width: 60%;
    grid-template-columns: repeat(4, 80px);
  }
  @media(max-width: 500px) {
    width: 90%;
  }
`;

export const ThumbnailWrapper = styled.div`
  position: relative;
  isolation: isolate;
  & .checkmark {
    width: minmax(2px, 2vw);
    top: minmax(2px, 5%);
    // right: 20%;
    right: 5%;
    color: black;
    border: white;
    position: absolute;
    z-index: 10;
    user-select: none;
    @media(min-width: 501px) and (max-width: 900px) {
      right: 25%;
    }
`;

export const Thumbnail = styled.img`
  object-fit: cover;
  width: 60px;
  // min-width: 70px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid black;
  opacity: 0.6;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 1;
  }
  @media(max-width:500px) {
    width: 60px;
    height: 60px;
  }
`;
