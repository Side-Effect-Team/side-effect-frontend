import {
  InfoContent,
  InfoContentLink,
  InfoTitle,
  InfoWrapper,
  Text,
} from "./styled";

export interface InfoProps {
  position: string;
  career: string;
  githubUrl: string | undefined;
  blogUrl: string | undefined;
  portfolioUrl: string | undefined;
}

export default function Info({
  position,
  career,
  githubUrl,
  blogUrl,
  portfolioUrl,
}: InfoProps) {
  return (
    <>
      <InfoWrapper>
        <InfoTitle>포지션</InfoTitle>
        <InfoContent>{position}</InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>경력</InfoTitle>
        <InfoContent>{career}</InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>깃허브</InfoTitle>
        {githubUrl ? (
          <InfoContentLink href={githubUrl} target="_blank">
            {githubUrl}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>블로그</InfoTitle>
        {blogUrl ? (
          <InfoContentLink href={blogUrl} target="_blank">
            {blogUrl}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>포트폴리오</InfoTitle>
        {portfolioUrl ? (
          <InfoContentLink href={portfolioUrl} target="_blank">
            {portfolioUrl}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
    </>
  );
}
