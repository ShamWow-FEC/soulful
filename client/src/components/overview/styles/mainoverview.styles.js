import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  & .overview-grid {
    display: grid;
    width: 100%:
    height: max-content;
    grid-template-columns: 6fr 4fr;
    grid-template-rows: max-content;
    align-content: center;
    align-items: center;
    margin-right: 0;
    column-gap: 3vw;
    @media(max-width: 900px) {
      width: 100%
      justify-content: center;
      grid-template-rows: repeat(2, max-content);
      grid-template-columns: 100%;
      row-gap: 3vh;
    };
    @media(min-width: 1200px) {
      justify-content: center;
      grid-template-columns: 7fr 3fr;
      grid-template-rows: max-content;
      row-gap: 3vh;
    }
  }
`;

export const TopOverview = styled.div`
  @media(max-width: 900px) {
    background: transparent;
  }
  @media(min-width: 901px) {
    padding: 5%;
    background: #F5EBE0;
  }
`;

export const BottomOverview = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 4vh;
  @media(max-width: 900px) {
    margin-top: 6vh;
    row-gap: 10vh;
  }
`;
