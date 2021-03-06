import styled, { css } from "styled-components";
import { colors } from "../../globalStyles/colors";

const Spinner = styled.div`
  ${({ theme }) => css`
    .loader-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      width: 100%;
      background-color: ${colors.mainBg};
    }

    .loader {
      display: inline-block;
      width: 64px;
      height: 64px;
      &:after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid ${colors.customYellow};
        border-color: ${colors.customYellow} transparent ${colors.customYellow};
          transparent;
        animation: loader 1.2s linear infinite;
      }
    }
    @keyframes loader {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `}
`;

export default Spinner;
