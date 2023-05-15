import { Dispatch, SetStateAction, useEffect, useState } from "react";
import SelectBox from "@/components/SelectBox";
import { Input } from "./styled";
import { UseFormRegister } from "react-hook-form";
import { InfoTitle, InfoWrapper } from "../../mypage/Profile/Info/styled";
import { FormData } from "@/pages/mypage/profileEdit";

interface InfoEditProps {
  career: string;
  setCareer: Dispatch<SetStateAction<string>>;
  position: string;
  setPosition: Dispatch<SetStateAction<string>>;
  infoRegister: UseFormRegister<
    Pick<FormData, "githubUrl" | "blogUrl" | "portfolioUrl" | "nickname">
  >;
  githubUrl: string | undefined;
  blogUrl: string | undefined;
  portfolioUrl: string | undefined;
}
const SELECT_POSITIONS = [
  { name: "프론트엔드", value: "FRONTEND" },
  { name: "백엔드", value: "BACKEND" },
  { name: "디자이너", value: "DESIGNER" },
  { name: "데브옵스", value: "DEVOPS" },
  { name: "기획자", value: "PM" },
  { name: "마케터", value: "MARKETER" },
];
const SELECT_CAREER = [
  { name: "취업준비생", value: "empty" },
  { name: "신입(0년차)", value: "new" },
  { name: "주니어(1~3년차)", value: "junior" },
  { name: "미들(4~6년차)", value: "middle" },
  { name: "시니어(7년이상)", value: "senior" },
];
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
  }, [career]);
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
      <InfoWrapper>
        <InfoTitle>깃허브</InfoTitle>
        <Input
          defaultValue={githubUrl}
          placeholder="정보를 등록해주세요"
          {...infoRegister("githubUrl")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>블로그</InfoTitle>
        <Input
          defaultValue={blogUrl}
          placeholder="정보를 등록해주세요"
          {...infoRegister("blogUrl")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>포트폴리오</InfoTitle>
        <Input
          defaultValue={portfolioUrl}
          placeholder="정보를 등록해주세요"
          {...infoRegister("portfolioUrl")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
            }
          }}
        />
      </InfoWrapper>
    </>
  );
}
