import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SelectBox from "@/components/SelectBox";
import { Input } from "./styled";
import { UseFormRegister } from "react-hook-form";
import { InfoTitle, InfoWrapper } from "../../mypage/Profile/Info/styled";
import { FormData } from "@/pages/mypage/profileEdit";
import { translateCareer, translatePosition } from "@/utils/translateData";
import { SELECT_CAREER, SELECT_POSITIONS } from "enum";

interface InfoEditProps {
  career: string;
  setCareer: Dispatch<SetStateAction<string>>;
  position: string;
  setPosition: Dispatch<SetStateAction<string>>;
  infoRegister: UseFormRegister<FormData>;
  githubUrl: string;
  blogUrl: string;
  portfolioUrl: string;
}

export default function InfoEdit({
  career,
  setCareer,
  position,
  setPosition,
  infoRegister,
  githubUrl,
  blogUrl,
  portfolioUrl,
}: InfoEditProps) {
  const [careerTitle, setCareerTitle] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  useEffect(() => {
    translateCareer(career, setCareerTitle);
    translatePosition(position, setPositionTitle);
  }, [career, position]);

  interface infoDataProps {
    title: string;
    url?: string;
    register: "githubUrl" | "blogUrl" | "portfolioUrl";
  }
  const infoData: infoDataProps[] = [
    { title: "깃허브", url: githubUrl, register: "githubUrl" },
    { title: "블로그", url: blogUrl, register: "blogUrl" },
    { title: "포트폴리오", url: portfolioUrl, register: "portfolioUrl" },
  ];

  return (
    <>
      <InfoWrapper>
        <InfoTitle>*포지션</InfoTitle>
        <SelectBox
          options={SELECT_POSITIONS}
          setValue={setPosition}
          title={positionTitle}
        />
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>*경력</InfoTitle>
        <SelectBox
          options={SELECT_CAREER}
          setValue={setCareer}
          title={careerTitle}
        />
      </InfoWrapper>
      {infoData.map((data, index) => (
        <InfoWrapper key={index}>
          <InfoTitle>{data.title}</InfoTitle>
          <Input
            defaultValue={data.url}
            placeholder="정보를 등록해주세요"
            {...infoRegister(data.register)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
          />
        </InfoWrapper>
      ))}
    </>
  );
}
