import { RightSectionWrapper, StyledSwiper } from "./styled";
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import TestImg from "../../../../../public/images/ProjectBackground.png";
import { Autoplay, Navigation } from "swiper";
export default function RightSection({ data }: any) {
  return (
    <RightSectionWrapper>
      d
      <StyledSwiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{ delay: 2500 }}
        direction={"vertical"}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={TestImg} alt="2" width={200} height={200} />
        </SwiperSlide>
      </StyledSwiper>
    </RightSectionWrapper>
  );
}
