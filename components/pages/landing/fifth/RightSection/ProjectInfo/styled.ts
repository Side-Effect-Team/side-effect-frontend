import styled from "styled-components";
import { media } from "@/styles/mediatest";
import { AiFillHeart } from "react-icons/ai";

export const ProjectInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ProjectTitle = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: xx-large;
  gap: 10px;
  ${media.mobile} {
    font-size: x-large;
  }
  ${media.custom(425)} {
    font-size: medium;
  }
`;
export const Title = styled.div`
  width: 100%;
  max-width: 200px;
  text-overflow: ellipsis;
  word-break: break-all;
  white-space: nowrap;
  overflow: hidden;
`;
export const Heart = styled.div`
  display: flex;
  align-items: center;
  font-size: x-large;
  ${media.mobile} {
    font-size: medium;
  }
`;
export const ProjectSubTitle = styled.h2`
  ${media.mobile} {
    font-size: small;
  }
`;
export const ProjectContent = styled.div`
  text-overflow: ellipsis;
  word-break: break-all;
  overflow: hidden;
  ${media.laptop} {
    display: -webkit-box;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    max-height: 150px;
    font-size: small;
  }
  ${media.mobile} {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    max-height: 100px;
    font-size: small;
  }
  ${media.custom(425)} {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-height: 100px;
    font-size: small;
  }
`;

export const HeartIcon = styled(AiFillHeart)`
  fill: ${(p) => p.theme.brandColor.coral};
`;
