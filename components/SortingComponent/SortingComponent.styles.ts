import styled, { css } from "styled-components";

const SortingComponent = styled.div`
  ${({ theme }) => css`
    &.sorting-wrap {
      text-align: right;
      select {
        min-width: 200px;
        border: 1px solid;
        width: 100%;
      }
    }
  `}
`;
export default SortingComponent;
