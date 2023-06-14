import { useState, useEffect } from "react";
import Image from "next/image";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { CarouselWrapper, SlideContentsWrapper, ButtonStyled } from "./styled";
import { CAROUSEL_CONTENTS_LIST } from "enum";

interface MainCarouselProps {
  data: typeof CAROUSEL_CONTENTS_LIST;
  intervalSeconds?: number;
}

interface SlideContentsProps {
  id: number;
  title: string;
  subTitle: string;
  bgColor?: string;
  imageSrc: string;
  slidePos: string;
}

interface TextContentsProps {
  title: string;
  subTitle: string;
}

export default function MainCarousel({
  data,
  intervalSeconds = 3,
}: MainCarouselProps) {
  const [slideIdx, setSlideIdx] = useState(0);

  const prevSlide = () => {
    setSlideIdx((prev) => (prev - 1 + data.length) % data.length);
  };
  const nextSlide = () => {
    setSlideIdx((prev) => (prev + 1) % data.length);
  };

  useEffect(() => {
    let slider = setInterval(() => nextSlide(), intervalSeconds * 1000);
    return () => {
      clearInterval(slider);
    };
  }, [slideIdx]);

  return (
    <CarouselWrapper>
      <ButtonStyled direction="left" onClick={prevSlide}>
        <IoChevronBack />
      </ButtonStyled>
      {data.map(({ ID, TITLE, SUB_TITLE, IMAGE, BACKGROUND_COLOR }) => {
        let slidePos = "nextSlide";
        if (slideIdx === ID) slidePos = "currentSlide";
        if (slideIdx - 1 === ID || (slideIdx === 0 && ID === data.length - 1)) {
          slidePos = "prevSlide";
        }

        return (
          <SlideContents
            key={ID}
            id={ID}
            title={TITLE}
            subTitle={SUB_TITLE}
            imageSrc={IMAGE}
            bgColor={BACKGROUND_COLOR}
            slidePos={slidePos}
          />
        );
      })}
      <ButtonStyled direction="right" onClick={nextSlide}>
        <IoChevronForward />
      </ButtonStyled>
    </CarouselWrapper>
  );
}

function SlideContents({
  id,
  title,
  subTitle,
  bgColor = "#eee",
  imageSrc,
  slidePos,
}: SlideContentsProps) {
  return (
    <SlideContentsWrapper bgColor={bgColor} slidePos={slidePos}>
      {id % 2 === 0 && <TextContents title={title} subTitle={subTitle} />}
      <Image
        src={imageSrc}
        width={300}
        height={300}
        alt="캐러셀 이미지"
        priority
      />
      {id % 2 !== 0 && <TextContents title={title} subTitle={subTitle} />}
    </SlideContentsWrapper>
  );
}

function TextContents({ title, subTitle }: TextContentsProps) {
  return (
    <div>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </div>
  );
}
