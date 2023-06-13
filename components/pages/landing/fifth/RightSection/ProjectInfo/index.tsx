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
        <Title>
          {title}ㅁㅈㅇㅁㅈㅇㅁㅈㅇㅁㅈㅇㅁ ㅁㅈㅇㅁㅈㅇㅁㅈㅇㅁㅈㅇㅁㅈㅇㅁㅈㅇ
        </Title>
        <Heart>
          <HeartIcon />
          {likeNum}
        </Heart>
      </ProjectTitle>
      <ProjectSubTitle>{subTitle}</ProjectSubTitle>
      <ProjectContent>
        {content}ㅏㅜ라ㅣ머ㅜㄴ랑ㅁ너ㅜ랴ㅏㅁ너ㅠ랴ㅐㅁ너ㅠ
        ㅏㅜ라ㅣ머ㅜㄴ랑ㅁ너ㅜ랴ㅏㅁ너ㅠ랴ㅐㅁ너ㅠㅏㅜ라ㅣ머ㅜㄴ랑ㅁ너ㅜ랴ㅏㅁ너ㅠ랴ㅐㅁ너ㅠ
        ㅏㅜ라ㅣ머ㅜㄴ랑ㅁ너ㅜ랴ㅏㅁ너ㅠ랴ㅐㅁ너ㅠㅏㅜ라ㅣ머ㅜㄴ랑ㅁ너ㅜ랴ㅏㅁ너ㅠ랴ㅐㅁ너ㅠ
        ㅏㅜ라ㅣ머ㅜㄴ랑ㅁ너ㅜ랴ㅏㅁ너ㅠ랴ㅐㅁ너ㅠ
        ㅏㅜ라ㅣ머ㅜㄴ랑ㅁ너ㅜ랴ㅏㅁ너ㅠ랴ㅐㅁ너ㅠ
      </ProjectContent>
    </ProjectInfoWrapper>
  );
}
