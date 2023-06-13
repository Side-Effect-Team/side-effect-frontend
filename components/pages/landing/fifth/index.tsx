import { SectionContainer } from "../styled";
import { FifthSectionContainer, Title, SectionWrapper } from "./styled";
import { useState } from "react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
export default function FifthSection({ data }: any) {
  const [project, setProject] = useState<any>();
  const selectProject = (id: number) => {
    const selectedProject = data.find((project: any) => project.id === id);
    setProject(selectedProject);
  };
  const selectedImage = project ? project.imgUrl : data[0].imgUrl;
  const selectedData = project ? project : data[0];
  const selectedId = project ? project.id : data[0].id;
  console.log(project);
  return (
    <SectionContainer>
      <FifthSectionContainer>
        <Title>이달의 베스트 프로젝트</Title>
        <SectionWrapper>
          <LeftSection selectedImage={selectedImage} id={selectedId} />
          <RightSection
            data={data}
            selectProject={selectProject}
            selectedData={selectedData}
          />
        </SectionWrapper>
      </FifthSectionContainer>
    </SectionContainer>
  );
}
