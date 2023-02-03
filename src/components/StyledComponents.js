import styled from "styled-components";

export const Button = styled.button`
  background: white;
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  cursor: pointer;
`;

export const StyledTable = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  width: 1050px;
  margin: 10px;
  caption-side: bottom;
  td,
  th {
    border: none;
  }
  td {
    padding: 0px 5px;
    min-width: 210px;
    text-align: center;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: #ededed;
    }
    :hover {
      background-color: #bcf5bc;
    }
  }
  thead > tr {
    background-color: #c2c2c2;
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 5px;
  margin: 5px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: grey;
  }
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
