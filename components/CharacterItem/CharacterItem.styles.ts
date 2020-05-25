import styled, { css } from "styled-components";
import { colors } from "../../globalStyles/colors";

const CharacterItem = styled.div`
  ${({ theme }) => css`
    &.character-item {
      text-align: center;
      padding: 5px;

      .main {
        background: ${colors.dimGray};
        border-radius: 5px;
        overflow: hidden;
        height: 100%;
      }

      .character-item__thumb {
        position: relative;

        .title {
          position: absolute;
          bottom: 0;
          text-align: left;
          padding: 5px 10px;
          width: 100%;
          background: ${colors.dimGray};
          opacity: 0.8;
        }
      }

      .info_block {
        padding: 10px 10px 20px 10px;

        .row {
          border-bottom: 1px solid gray;

          &:last-of-type {
            border: none;
          }

          .col-4 {
            text-align: left;
          }

          .col-8 {
            text-align: right;
            color: ${colors.customYellow};
          }

          .col-4,
          .col-8 {
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }
      }
    }

    .character-item__title {
      font-size: 1.5em;
    }

    .item-thumb-wrap {
      width: 100%;
    }

    .item-thumb-image {
      border-radius: 0;
    }
  `}
`;

export default CharacterItem;
