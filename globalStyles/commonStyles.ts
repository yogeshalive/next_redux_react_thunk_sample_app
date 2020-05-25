/* my color palette variables */
import { css } from "styled-components";
import { colors } from "../globalStyles/colors";

export const getStyles = (props) => css`
  body {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  /* basic reset */

  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 14px;
  }

  body {
    font-weight: normal;
    font-style: normal;
    color: ${colors.textColor};
    min-height: 100vh;
    background-color: ${colors.mainBg};
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure {
    margin: 0;
  }

  section {
    font-size: 1rem;
  }

  a {
    color: ${colors.textColor};
    text-decoration: none;
  }

  a:active {
    text-decoration: none;
  }

  a:active,
  a:focus,
  a:visited {
    color: ${colors.textColor};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    line-height: 1.5;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .main-content,
  .page-section {
    padding-top: 1.5em;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

export default css`
  ${({ theme }) => getStyles(theme)}
`;
