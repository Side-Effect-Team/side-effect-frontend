import styled from "styled-components";
import Image from "next/image";
import { media } from "@/styles/mediatest";

export const RightSectionWrapper = styled.div`
  flex: 5;
  border-radius: 15px;
  display: flex;
  background-color: ${(p) => p.theme.componentBgColor};
  padding: 20px;
  overflow: hidden;
  height: 100%;
  ${media.mobile} {
    flex-direction: column;
  }
`;
export const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const SwiperContainer = styled.div`
  .clicked {
    border: 6px solid ${(p) => p.theme.textColor};
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    cursor: pointer;
    overflow: hidden;
    position: relative;

    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
    border-radius: 15px;
    ${media.mobile} {
      min-width: 150px;
      max-width: 150px;
      min-height: 150px;
      max-height: 150px;
    }
    ${media.custom(425)} {
      min-width: 100px;
      max-width: 100px;
      min-height: 100px;
      max-height: 100px;
    }
  }
`;
