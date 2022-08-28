import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: max-content;
  grid-template-rows: repeat(5, max-content);
  grid-template-columns: 1fr;
  gap: 2vh;
`;

export const SocialSharingGrid = styled.div`
  display: grid;
  height: min-content;
  width: 12vh;
  grid-template-rows: max-content;
  grid-template-columns: repeat(3, max-content);
  gap: 1vh;
  cursor: pointer;
  & .social-sharing {
    min-width: 25px;
    min-height: 25px;
    width: 3vh;
    height: 3vh;
  }
`;

export const SyntheticLink = styled.span`
  color: blue;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
