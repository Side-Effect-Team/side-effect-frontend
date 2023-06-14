import { SectionContainer } from "../styled";
import { FifthSectionContainer, Title, SectionWrapper } from "./styled";
import { BestProjectType, BestProjectDataType } from "pages/index";
import { useState } from "react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

interface ProjectType {
  imgUrl: string;
  id: number;
}
export default function FifthSection({ data }: BestProjectType) {
  const [project, setProject] = useState<BestProjectDataType>();
  const selectProject = (id: number) => {
    const selectedProject = data.find(
      (project: ProjectType) => project.id === id,
    );
    setProject(selectedProject);
  };
  const selectedImage = project ? project.imgUrl : data[0].imgUrl;
  const selectedData = project ? project : data[0];
  const selectedId = project ? project.id : data[0].id;
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
