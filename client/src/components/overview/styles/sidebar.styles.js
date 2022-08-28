import styled from 'styled-components';

export default styled.div`
display: grid;
width: 100%;
height: max-content;
min-width: max(550px, 1fr);
max-width: 100%;
grid-template-rows: max-content max-content 150px;
grid-template-columns: 1fr;
align-self: center;
align-content: center;
align-items: center;
gap: 10px;
@media(max-width: 900px) {
  padding-left: 5%;
  padding-right: 5%;
}
`;
