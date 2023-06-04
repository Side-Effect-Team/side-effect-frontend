import { useEffect, useState } from "react";
import {
  InfoContent,
  InfoContentLink,
  InfoTitle,
  InfoWrapper,
  Text,
} from "./styled";
import { translateCareer, translatePosition } from "@/utils/translateData";

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
  const [careerTitle, setCareerTitle] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  useEffect(() => {
    translateCareer(career, setCareerTitle);
    translatePosition(position, setPositionTitle);
  }, [career, position]);

  return (
    <>
      <InfoWrapper>
        <InfoTitle>포지션</InfoTitle>
        <InfoContent>{positionTitle}</InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>경력</InfoTitle>
        <InfoContent>{careerTitle}</InfoContent>
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>깃허브</InfoTitle>
        {githubUrl ? (
          <InfoContentLink
            href={`${
              githubUrl.startsWith("https://") ? "" : "https://"
            }${githubUrl}`}
            target="_blank"
          >
            {githubUrl}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>블로그</InfoTitle>
        {blogUrl ? (
          <InfoContentLink
            href={`${
              blogUrl.startsWith("https://") ? "" : "https://"
            }${blogUrl}`}
            target="_blank"
          >
            {blogUrl}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>포트폴리오</InfoTitle>
        {portfolioUrl ? (
          <InfoContentLink
            href={`${
              portfolioUrl.startsWith("https://") ? "" : "https://"
            }${portfolioUrl}`}
            target="_blank"
          >
            {portfolioUrl}
          </InfoContentLink>
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </InfoWrapper>
    </>
  );
}
