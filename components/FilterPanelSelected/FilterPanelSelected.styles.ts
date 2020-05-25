import styled, { css } from "styled-components";

const FilterPanelSelected = styled.div`
  ${({ theme }) => css`
    &.selected-wrap {
      margin-bottom: 10px;

      .selectedBtn {
        display: inline-block;
        min-width: 100px;
        border: 1px solid;
        background: gray;
        margin-right: 10px;
        text-align: center;
        border-radius: 10px;
        color: white;
        font-size: 18px;
        padding: 2px 10px;

        span {
          margin-left: 10px;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }
  `}
`;

export default FilterPanelSelected;
