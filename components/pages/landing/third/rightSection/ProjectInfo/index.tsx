import { ProjectInfoWrapper, ProjectTitle } from "./styled";
export default function ProjectInfo({ selectedData }: any) {
  const { title, subTitle, likeNum } = selectedData;
  return (
    <ProjectInfoWrapper>
      <ProjectTitle>
        <h1>{title}</h1>
        <h1>{subTitle}</h1>
      </ProjectTitle>
    </ProjectInfoWrapper>
  );
}
