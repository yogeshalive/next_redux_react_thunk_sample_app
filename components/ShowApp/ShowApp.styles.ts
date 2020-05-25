import styled, { css } from "styled-components";

const ShowApp = styled.div`
  ${({ theme }) => css`
    .aside,
    .sticky-header {
      position: sticky;
      top: 0;
      background: white;
      z-index: 10;
      margin: 0 -15px;
      padding: 10px;
    }
  `}
`;
export default ShowApp;
