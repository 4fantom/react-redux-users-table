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

export const Paper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const Error = styled.div`
  padding: 10px;
  margin: 10px;
  background-color: red;
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
      background-color: #e4e6b3;
    }
    :hover {
      background-color: #d5c181;
    }
  }
  thead > tr {
    background-color: #b8973d;
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
  background: #d3e4af;
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
