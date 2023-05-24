import { useEffect, useState } from "react";
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
  const [careerTitle, setCareerTitle] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  useEffect(() => {
    if (career === "empty") {
      setCareerTitle("취업준비생");
    } else if (career === "new") {
      setCareerTitle("신입(0년차)");
    } else if (career === "junior") {
      setCareerTitle("주니어(1~3년차)");
    } else if (career === "middle") {
      setCareerTitle("미들(4~6년차)");
    } else if (career === "senior") {
      setCareerTitle("시니어(7년이상)");
    } else {
      setCareerTitle("경력");
    }

    if (position === "FRONTEND") {
      setPositionTitle("프론트엔드");
    } else if (position === "BACKEND") {
      setPositionTitle("백엔드");
    } else if (position === "DESIGNER") {
      setPositionTitle("디자이너");
    } else if (position === "DEVOPS") {
      setPositionTitle("데브옵스");
    } else if (position === "MARKETER") {
      setPositionTitle("마케터");
    } else if (position === "PM") {
      setPositionTitle("기획자");
    } else {
      setPositionTitle("포지션");
    }
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
