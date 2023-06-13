import { media } from "@/styles/media";
import styled, { css } from "styled-components";

export const TagContainer = styled.div`
  /* min-height: 100px; */
  ${media.mobile} {
    width: 100%;
    min-height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    margin-bottom: 5px;
  }
`;
export const TagTitle = styled.div`
  min-width: 50px;
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.gray};
  margin-bottom: 10px;
  ${media.mobile} {
    margin-bottom: 0;
    margin-right: 10px;
  }
`;
export const EmptyTitle = styled.div`
  min-width: 50px;
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.theme.colors.gray};
  margin-bottom: 10px;
  margin-top: 15px;
  min-height: 65px;
  ${media.mobile} {
    margin-bottom: 0;
    margin-right: 10px;
    margin-top: 0;
    min-height: 0;
  }
`;

export const PlusTag = styled.div<{ fill: string }>`
  display: none;
  ${media.mobile} {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    min-width: 22px;
    padding: 2px;
    border-radius: 50%;
    ${(p) =>
      p.fill === "true"
        ? css`
            color: white;
            background-color: ${(p) => p.theme.brandColor.primary};
            border: 2px solid ${(p) => p.theme.brandColor.primary};
          `
        : css`
            color: ${(p) => p.theme.brandColor.primary};
            background-color: ${(p) => p.theme.mainBackGround};
            border: 2px solid ${(p) => p.theme.brandColor.primary};
          `};
  }
`;

export const TagWrapper = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 7px;
  margin-bottom: 20px;
  overflow: hidden;
  ${media.mobile} {
    width: calc(100% - 90px);
    height: 25px;
    margin-bottom: 0;
  }
`;
