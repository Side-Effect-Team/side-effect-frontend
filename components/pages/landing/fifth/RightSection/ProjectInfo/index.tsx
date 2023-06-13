import {
  ProjectInfoWrapper,
  ProjectTitle,
  ProjectContent,
  ProjectSubTitle,
  Heart,
  HeartIcon,
} from "./styled";

export default function ProjectInfo({ selectedData }: any) {
  const { title, subTitle, likeNum, content } = selectedData;
  return (
    <ProjectInfoWrapper>
      <ProjectTitle>
        {title}
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
