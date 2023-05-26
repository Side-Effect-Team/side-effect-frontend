import { theme } from "@/styles/Theme";
import styled, { css } from "styled-components";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: string;
  fill?: string;
  fontSize?: string;
}

export const TagWrapper = styled.div<TagProps>`
  padding: calc(${(p) => p.fontSize} * 0.2) calc(${(p) => p.fontSize} * 0.7);
  border-radius: 5px;
  font-size: ${(p) => p.fontSize};
  font-weight: 600;
  ${(p) =>
    p.fill === "true"
      ? css`
          color: white;
          background-color: ${p.color};
          border: 2px solid ${p.color};
        `
      : css`
          color: ${p.color};
          background-color: white;
          border: 2px solid ${p.color};
        `};
`;

TagWrapper.defaultProps = {
  fill: "true",
  color: theme.brandColor.primary,
  fontSize: "16px",
};
