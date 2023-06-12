import { RightSectionWrapper, SwiperContainer } from "./styled";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import ProjectInfo from "./ProjectInfo";

export default function RightSection({
  data,
  selectProject,
  selectedData,
}: any) {
  const getDirection = () => {
    const windowWidth = window.innerWidth;
    const direction = windowWidth <= 768 ? "horizontal" : "vertical";
    return direction;
  };

  console.log(data);
  console.log("selectedData", selectedData);
  return (
    <RightSectionWrapper>
      <ProjectInfo selectedData={selectedData} />
      <SwiperContainer>
        <Swiper
          modules={[Autoplay]}
          effect={"slide"}
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
          autoplay={{ delay: 2000 }}
          loop={true}
          direction={getDirection()}
          onResize={(swiper) => {
            swiper.changeDirection(getDirection());
          }}
        >
          {data.map((project: any) => {
            return (
              <SwiperSlide
                key={project.id}
                onClick={() => selectProject(project.id)}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_API_URL}/free-boards/image/${project.imgUrl}`}
                  alt="이달의 베스트 프로젝트"
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperContainer>
    </RightSectionWrapper>
  );
}
