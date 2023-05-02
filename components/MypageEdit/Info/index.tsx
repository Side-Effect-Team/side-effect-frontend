import { Dispatch, SetStateAction } from "react";
import SelectBox from "../../SelectBox";
import { InfoTitle, InfoWrapper } from "../../pages/Mypage/styled";
import { Input } from "./styled";
import { UseFormRegister } from "react-hook-form";
import { DataProps } from "../../pages/Mypage/Edit";

interface FormData {
  github: string;
  blog: string;
  portfolio: string;
}
interface MyPageDetailProps {
  data?: Pick<DataProps, "github" | "blog" | "portfolio">;
  career: string | number;
  setCareer: Dispatch<SetStateAction<string | number>>;
  position: string | number;
  setPosition: Dispatch<SetStateAction<string | number>>;
  resister: UseFormRegister<FormData>;
}
export default function Info(p: MyPageDetailProps) {
  const SELECT_CAREER = ["0", "1~3", "4~6", "7년 이상 "];
  const SELECT_POSITIONS = [
    "프론트엔드",
    "백엔드",
    "디자이너",
    "데브옵스",
    "기획자",
    "마케터",
  ];
  return (
    <>
      <InfoWrapper>
        <InfoTitle>*포지션</InfoTitle>
        <SelectBox
          options={SELECT_POSITIONS}
          setValue={p.setPosition}
          value={p.position}
          title="포지션"
        />
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>*경력</InfoTitle>
        <SelectBox
          options={SELECT_CAREER}
          setValue={p.setCareer}
          value={p.career}
          title="경력"
        />
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>깃허브</InfoTitle>
        <Input
          defaultValue={p.data?.github || ""}
          placeholder="정보를 등록해주세요"
          {...p.resister("github")}
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
          defaultValue={p.data?.blog || ""}
          placeholder="정보를 등록해주세요"
          {...p.resister("blog")}
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
          defaultValue={p.data?.portfolio || ""}
          placeholder="정보를 등록해주세요"
          {...p.resister("portfolio")}
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
