import styled from 'styled-components';

export const Wrapper = styled.div`
  align-self: start;
  width: inherit;
  height: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: max-content 70px max-content;
  justify-items: left;
  align-content: center;;
  column-gap: 5px;
  position: relative;
  isolation: isolate;

  & .btn-header {
    border: 1px solid black;
  }

  & .btn-header-expanded {
    border-bottom: 1px inset grey;
  }

  & .focus {
    // transition: all .2s ease-in-out;
    &:hover {
      // transform: scale(1.1);
      opacity: 0.7;
    }
  }

  & .btn-down {
    background: #D6CCC2 url('https://cdn-icons-png.flaticon.com/512/60/60995.png');
    background-repeat: no-repeat;
    background-position: 95% 50%;
    background-size: 10px 10px;
  }

  & .btn-up {
    background: #D6CCC2 url('https://cdn-icons-png.flaticon.com/512/61/61148.png');
    background-repeat: no-repeat;
    background-position: 95% 50%;
    background-size: 10px 10px;
  }

  & .inactive {
    color: #EDEDE9;
    cursor: not-allowed;
  }
`;

export const TextWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  align-self: end;
`;

export const SizeSelector = styled.ul`
  list-style-type: none;
  position: absolute;
  z-index: 500;
  height: max-content;
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  align-self: top;
  width: 100%;
  padding: 0;
  margin: 0;
  & li {
    height: 30px;
  }
  & button {
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #D6CCC2;
    text-align: start;
    color: black;
  }
  & .options {
    &:hover {
      background: #D5BDAF;
    }
  }
`;

export const QuantitySelector = styled.ul`
  list-style-type: none;
  position: absolute;
  z-index: 100;
  height: max-content;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: top;
  width: 100%;
  padding: 0;
  margin: 0;
  & li {
    height: 30px;
  }
  & button {
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #D6CCC2;
    text-align: start;
    color: black;
  }
  & .options {
    &:hover {
      background: #D5BDAF;
    }
  }
`;
