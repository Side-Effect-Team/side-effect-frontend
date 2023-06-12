import { SectionContainer } from "../styled";
import { ThirdSectionContainer, Title } from "./styled";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function ThirdSection({ data }: any) {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const [project, setProject] = useState<any>();

  const selectProject = (id: number) => {
    const selectedProject = data.find((project: any) => project.id === id);
    setProject(selectedProject);
  };
  const selectedImage = project ? project.imgUrl : data[0].imgUrl;
  const selectedData = project ? project : data[0];
  return (
    <SectionContainer ref={ref}>
      {/* <Title>TOP RANKED PROJECTS</Title> */}
      <ThirdSectionContainer>
        <LeftSection selectedImage={selectedImage} />
        <RightSection
          data={data}
          selectProject={selectProject}
          selectedData={selectedData}
        />
      </ThirdSectionContainer>
    </SectionContainer>
  );
}
