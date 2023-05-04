// import {
//   InfoContent,
//   InfoContentLink,
//   InfoTitle,
//   InfoWrapper,
//   Text,
// } from "./styled";

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
  github: string | undefined;
  blog: string | undefined;
  portfolio: string | undefined;
}

export default function Info({
  position,
  career,
  github,
  blog,
  portfolio,
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
        {github ? (
          <InfoContentLink href={github} target="_blank">
            {github}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>블로그</InfoTitle>
        {blog ? (
          <InfoContentLink href={blog} target="_blank">
            {blog}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>포트폴리오</InfoTitle>
        {portfolio ? (
          <InfoContentLink href={portfolio} target="_blank">
            {portfolio}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
    </>
  );
}
