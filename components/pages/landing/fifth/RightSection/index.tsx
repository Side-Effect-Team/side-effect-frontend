import { RightSectionWrapper, SwiperContainer } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Mousewheel } from "swiper";
import ProjectInfo from "./ProjectInfo";
import { useState } from "react";
import { BestProjectDataType } from "pages/index";
import { useInView } from "react-intersection-observer";
interface PropsType {
  data: BestProjectDataType[];
  selectProject: (id: number) => void;
  selectedData: BestProjectDataType;
}
export default function RightSection({
  data,
  selectProject,
  selectedData,
}: PropsType) {
  const [activeSlide, setActiveSlide] = useState(0);
  const { ref, inView } = useInView();
  const getDirection = () => {
    const windowWidth = window.innerWidth;
    const direction = windowWidth <= 768 ? "horizontal" : "vertical";
    return direction;
  };
  return (
    <RightSectionWrapper ref={ref} inView={inView}>
      <ProjectInfo selectedData={selectedData} />
      <SwiperContainer>
        <Swiper
          modules={[Autoplay, Mousewheel]}
          mousewheel={true}
          breakpoints={{
            0: {
              slidesPerView: "auto",
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: "auto",
              slidesPerGroup: 1,
              spaceBetween: 30,
            },
          }}
          loop={true}
          direction={getDirection()}
          onResize={(swiper) => {
            swiper.changeDirection(getDirection());
          }}
          autoplay={{ delay: 2000 }}
          onClick={(swiper) => {
            const clickedSlide = swiper.clickedSlide;
            if (clickedSlide) {
              const activeSlide =
                swiper.clickedSlide.getAttribute("project-id");
              setActiveSlide(Number(activeSlide));
            }
            return;
          }}
        >
          {data.map((project: BestProjectDataType) => {
            return (
              <SwiperSlide
                key={project.id}
                className={project.id === activeSlide ? "clicked" : ""}
                project-id={project.id}
                onClick={() => {
                  selectProject(project.id);
                }}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/free-boards/image/${project.imgUrl}`}
                  alt="이달의 베스트 프로젝트"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperContainer>
    </RightSectionWrapper>
  );
}
