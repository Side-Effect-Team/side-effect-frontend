import {
  ProjectInfoWrapper,
  ProjectTitle,
  ProjectContent,
  ProjectSubTitle,
  Heart,
  HeartIcon,
  Title,
} from "./styled";

export default function ProjectInfo({ selectedData }: any) {
  const { title, subTitle, likeNum, content } = selectedData;
  return (
    <ProjectInfoWrapper>
      <ProjectTitle>
        <Title>{title}</Title>
        <Heart>
          <HeartIcon />
          {likeNum}
        </Heart>
      </ProjectTitle>
      <ProjectSubTitle>{subTitle}</ProjectSubTitle>
      <ProjectContent>{content}</ProjectContent>
    </ProjectInfoWrapper>
  );
}
