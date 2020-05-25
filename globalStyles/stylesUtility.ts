import { css } from "styled-components";
import { colors } from "../globalStyles/colors";

export const button = (props) => css`
  cursor: pointer;
  border: 2px solid ${colors.customYellow};
  border-radius: 2px;
  background-color: ${colors.customDark};
  color: #fff;
  font-size: 16px;
  font-family: inherit;
  transition: background-color 0.3s ease-in;
  &:hover {
    background-color: rgba(32, 35, 41, 0.75);
  }
`;
