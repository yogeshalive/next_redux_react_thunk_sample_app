import styled, { css } from "styled-components";
import { colors } from "../../globalStyles/colors";

const CharacterList = styled.div`
  ${({ theme }) => css`
    &.characters-wrap {
      background: ${colors.black};
      padding: 5px;
      color: ${colors.mainBg};
    }
  `}
`;

export default CharacterList;
