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

  const infoData = [
    { title: "포지션", value: positionTitle },
    { title: "경력", value: careerTitle },
    { title: "깃허브", url: githubUrl },
    { title: "블로그", url: blogUrl },
    { title: "포트폴리오", url: portfolioUrl },
  ];
  return (
    <>
      {infoData.map((data, index) => (
        <InfoWrapper key={index}>
          <InfoTitle>{data.title}</InfoTitle>
          {data.value ? (
            <InfoContent>{data.value}</InfoContent>
          ) : (
            <>
              {data.url ? (
                <InfoContentLink
                  href={`${data.url.startsWith("https://") ? "" : "https://"}${
                    data.url
                  }`}
                  target="_blank"
                >
                  {data.url}
                </InfoContentLink>
              ) : (
                <Text>아직 작성된 정보가 없습니다.</Text>
              )}
            </>
          )}
        </InfoWrapper>
      ))}
    </>
  );
}
