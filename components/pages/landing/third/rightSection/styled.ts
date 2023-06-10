import styled from "styled-components";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export const RightSectionWrapper = styled.div`
  flex: 6;
  border-radius: 15px;
  display: flex;
`;
export const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;
export const StyledSwiper = styled(Swiper)`
  .swiper {
    width: 100%;
    height: 100%;
  }
  .slide-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .swiper-slide {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    min-width: 200px;
    min-height: 200px;
    max-height: 200px;
    box-shadow: ${(p) => p.theme.boxShadow};
    border-radius: 15px;
  }
`;
