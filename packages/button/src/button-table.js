import styled from 'styled-components'

const Table = styled.table`
  font-family: sans-serif;

  th,
  td {
    text-align: center;
    padding: 16px;
  }
  th {
    border-bottom: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type,
  th:first-of-type {
    border-right: 1px solid hsl(0deg 0% 80%);
  }
  td:first-of-type {
    text-align: right;
  }
`

export default Table
