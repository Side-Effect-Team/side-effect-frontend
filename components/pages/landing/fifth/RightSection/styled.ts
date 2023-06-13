import styled, { css } from "styled-components";
import Image from "next/image";
import { media } from "@/styles/mediatest";

export const RightSectionWrapper = styled.div<{ inView: boolean }>`
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  overflow: hidden;
  height: 100%;
  gap: 10px;
  background-color: ${(p) => p.theme.componentBgColor};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  transform: ${(p) => (p.inView ? "translateX(0%)" : "translateX(100%)")};
  opacity: ${(p) => (p.inView ? "1" : "0")};
  transition: 0.5s ease;
  ${media.mobile} {
    flex-direction: column;
    min-height: 265px;
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
