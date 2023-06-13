import styled from "styled-components";
import { media } from "@/styles/mediatest";
import { AiFillHeart } from "react-icons/ai";

export const ProjectInfoWrapper = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${media.mobile} {
    gap: 3px;
    flex: 4;
  }
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

  ${media.custom(425)} {
    max-height: 100px;
    font-size: small;
  }
`;

export const HeartIcon = styled(AiFillHeart)`
  fill: ${(p) => p.theme.brandColor.coral};
`;
