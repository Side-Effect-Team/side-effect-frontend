import { Dispatch, SetStateAction } from "react";
import SelectBox from "@/components/SelectBox";
import { Input } from "./styled";
import { UseFormRegister } from "react-hook-form";
import { InfoTitle, InfoWrapper } from "../../mypage/Info/styled";
import { FormData } from "@/pages/mypage/edit";

interface InfoEditProps {
  career: string | number;
  setCareer: Dispatch<SetStateAction<string | number>>;
  position: string | number;
  setPosition: Dispatch<SetStateAction<string | number>>;
  infoRegister: UseFormRegister<
    Pick<FormData, "github" | "blog" | "portfolio">
  >;
  github: string | undefined;
  blog: string | undefined;
  portfolio: string | undefined;
}
const SELECT_POSITIONS = [
  { name: "프론트엔드", value: "frontend" },
  { name: "백엔드", value: "backend" },
  { name: "디자이너", value: "designer" },
  { name: "데브옵스", value: "devops" },
  { name: "기획자", value: "marketer" },
  { name: "마케터", value: "pm" },
];
const SELECT_CAREER = [
  { name: "취업준비생", value: "empty" },
  { name: "신입(0년차)", value: "new" },
  { name: "주니어(1~3년차)", value: "junior" },
  { name: "미들(4~6년차)", value: "middle" },
  { name: "시니어(7년이상)", value: "sinior" },
];
export default function InfoEdit({
  career,
  setCareer,
  position,
  setPosition,
  infoRegister,
  github,
  blog,
  portfolio,
}: InfoEditProps) {
  return (
    <>
      <InfoWrapper>
        <InfoTitle>*포지션</InfoTitle>
        <SelectBox
          options={SELECT_POSITIONS}
          setValue={setPosition}
          title="포지션"
        />
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>*경력</InfoTitle>
        <SelectBox options={SELECT_CAREER} setValue={setCareer} title="경력" />
      </InfoWrapper>
      <InfoWrapper>
        <InfoTitle>깃허브</InfoTitle>
        <Input
          defaultValue={github || ""}
          placeholder="정보를 등록해주세요"
          {...infoRegister("github")}
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
          defaultValue={blog || ""}
          placeholder="정보를 등록해주세요"
          {...infoRegister("blog")}
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
          defaultValue={portfolio || ""}
          placeholder="정보를 등록해주세요"
          {...infoRegister("portfolio")}
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
