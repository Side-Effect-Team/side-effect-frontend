import styled, { css } from "styled-components";
import { BrandColorTypes, theme } from "../../styles/Theme";
import React from "react";
import { darken, lighten } from "polished";

export interface ButtonStyle
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  // fill?: boolean;
  fill?: "true" | "false";

  color?: BrandColorTypes;
}

const sizeStyles = css<ButtonStyle>`
  ${(props) =>
    props.size === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}
    ${(props) =>
    props.size === "large" &&
    css`
      height: 3rem;
      font-size: 1.25rem;
    `}
`;

const fillStyle = css<ButtonStyle>`
  ${(props) =>
    props.fill === "false" &&
    // !props.fill &&
    css`
      border: 2px solid ${props.color && theme.brandColor[props.color]};
      color: ${props.color && theme.brandColor[props.color]};
      background-color: white;
      :hover {
        border: 2px solid
          ${props.color && lighten(0.1, theme.brandColor[props.color])};
        color: ${props.color && lighten(0.1, theme.brandColor[props.color])};
        background-color: white;
      }
      :active {
        border: 2px solid
          ${props.color && darken(0.1, theme.brandColor[props.color])};
        color: ${props.color && darken(0.1, theme.brandColor[props.color])};
      }
    `}
`;
const colorStyle = css<ButtonStyle>`
  ${(props) =>
    props.color &&
    css`
      background-color: ${theme.brandColor[props.color]};
      &:hover {
        background-color: ${lighten(0.05, theme.brandColor[props.color])};
      }
      &:active {
        background: ${darken(0.05, theme.brandColor[props.color])};
      }
    `}
`;
const primary = `${theme.brandColor.primary}`;
export const StyledButton = styled.button`
  /*공통 스타일*/
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: ${primary};
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;

  /*크기*/
  height: 2.25rem;
  font-size: 1rem;
  :hover {
    background-color: ${lighten(0.1, primary)};
  }
  :active {
    background: ${darken(0.1, primary)};
  }
  :disabled {
    background-color: ${theme.brandColor.lightGray};
    pointer-events: none;
  }
  ${sizeStyles};
  ${colorStyle}
  ${fillStyle};

  /*기타 */
  & + & {
    margin-left: 1rem;
  }
`;
StyledButton.defaultProps = {
  size: "medium",
  fill: "true",
  color: "primary",
};
