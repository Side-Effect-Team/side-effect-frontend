import { theme } from "@/styles/Theme";
import { media } from "@/styles/media";
import styled, { css } from "styled-components";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  color?: string;
  fill?: string;
  fontSize?: string;
  isRecruiting?: boolean;
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
          background-color: ${p.isRecruiting ? p.color : p.theme.colors.gray};
          border: 2px solid ${p.isRecruiting ? p.color : p.theme.colors.gray};
        `
      : css`
          color: ${p.isRecruiting ? p.color : p.theme.colors.gray};
          background-color: ${(p) => p.theme.componentBgColor};
          border: 2px solid ${p.isRecruiting ? p.color : p.theme.colors.gray};
          ${media.mobile} {
            background-color: ${(p) => p.theme.mainBackGround};
          }
        `};
  ${media.mobile} {
    font-size: calc(${(p) => p.fontSize} * 0.8);
    padding: calc(${(p) => p.fontSize} * 0.1) calc(${(p) => p.fontSize} * 0.3);
    // 추가
  }
`;

TagWrapper.defaultProps = {
  fill: "true",
  color: theme.brandColor.primary,
  fontSize: "16px",
};
