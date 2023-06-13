import {
  ProjectInfoWrapper,
  ProjectTitle,
  ProjectContent,
  ProjectSubTitle,
  Heart,
  HeartIcon,
} from "./styled";

export default function ProjectInfo({ selectedData }: any) {
  console.log(selectedData);
  const { title, subTitle, likeNum, content } = selectedData;
  console.log(selectedData);
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
