import styled, { css } from "styled-components";

interface ButtonProps {
  secondary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  ${(p) =>
    p.secondary === true
      ? css`
          font: inherit;
          font-size: 13px;
          background: #000;
          color: #fff;
          border: 0;
          border-radius: 5px;
          padding: 5px 15px;
          margin: 0 20px;
          cursor: pointer;

          &:hover {
            opacity: 0.8;
          }
        `
      : css`
          display: inline-block;
          background: red;
          color: #fff;
          padding: 10px 20px;
          cursor: pointer;
          border: 0;
          border-radius: 5px;

          &:hover {
            opacity: 0.9;
          }
        `}
`;
