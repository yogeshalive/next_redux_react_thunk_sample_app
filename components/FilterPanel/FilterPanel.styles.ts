import styled, { css } from "styled-components";
import { button } from "../../globalStyles/stylesUtility";

const FilterPanel = styled.form`
  ${({ theme }) => css`
    .sorting-fieldset {
      border: 1px solid;
      margin: 0 0 2em;
      padding: 10px;
    }

    .sorting-legend {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 1em;
    }

    .filter-panel-wrap {
      h2 {
        margin-bottom: 40px;
      }
    }

    .sorting-label {
      display: flex;
      margin-bottom: 0.5em;
      font-size: 16px;
      &:last-child {
        margin-bottom: 0;
      }
    }

    .sorting-label-text {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.5em;
      height: 1.5em;
    }

    .reset-filter-button {
      ${button}
    }
  `}
`;

export default FilterPanel;
