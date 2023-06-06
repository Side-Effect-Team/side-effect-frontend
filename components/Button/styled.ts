import styled, { css } from "styled-components";
import { BrandColorTypes, theme } from "../../styles/Theme";
import React from "react";
import { darken, lighten } from "polished";
import { media } from "@/styles/mediatest";

export interface ButtonStyle
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  fill?: "true" | "false";

  color?: BrandColorTypes;
}

const sizeStyles = css<ButtonStyle>`
  ${(p) =>
    p.size === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
      ${media.mobile} {
        height: 1.25rem;
        font-size: 0.7rem;
      }
    `}
  ${(p) =>
    p.size === "medium" &&
    css`
      height: 2.25rem;
      font-size: 1rem;
      ${media.mobile} {
        height: 1.75rem;
        font-size: 0.875rem;
      }
    `}
    ${(p) =>
    p.size === "large" &&
    css`
      height: 3rem;
      font-size: 1.25rem;
      ${media.mobile} {
        height: 2.5rem;
        font-size: 1.125rem;
      }
    `}
`;

const fillStyle = css<ButtonStyle>`
  ${(p) =>
    p.fill === "false" &&
    css`
      border: 2px solid ${p.color && theme.brandColor[p.color]};
      color: ${p.color && theme.brandColor[p.color]};
      background-color: white;
      :hover {
        border: 2px solid ${p.color && lighten(0.1, theme.brandColor[p.color])};
        color: ${p.color && lighten(0.1, theme.brandColor[p.color])};
        background-color: white;
      }
      :active {
        border: 2px solid ${p.color && darken(0.1, theme.brandColor[p.color])};
        color: ${p.color && darken(0.1, theme.brandColor[p.color])};
      }
    `}
`;
const colorStyle = css<ButtonStyle>`
  ${(p) =>
    p.color &&
    css`
      background-color: ${theme.brandColor[p.color]};
      &:hover {
        background-color: ${lighten(0.05, theme.brandColor[p.color])};
      }
      &:active {
        background: ${darken(0.05, theme.brandColor[p.color])};
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
`;
StyledButton.defaultProps = {
  size: "medium",
  fill: "true",
  color: "primary",
};
