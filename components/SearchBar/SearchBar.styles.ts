import styled, { css } from "styled-components";
import { colors } from "../../globalStyles/colors";
import { button } from "../../globalStyles/stylesUtility";

const SearchBar = styled.div`
  ${({ theme }) => css`
    &.search-wrap {
      margin-bottom: 1em;
      align-items: center;
    }

    .search-input {
      height: 2em;
      min-width: 200px;
      flex-grow: 1;
      font-size: 16px;
      margin-right: 1em;
      border: none;
      outline: none;
      border: 1px solid ${colors.customDark};
      background: transparent;
      &:focus {
        border-bottom: 1px solid ${colors.customYellow};
      }
    }

    .search-button {
      ${button}
    }
  `}
`;
export default SearchBar;
