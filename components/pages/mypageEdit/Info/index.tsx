import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import SelectBox from "@/components/SelectBox";
import { Input } from "./styled";
import { InfoTitle, InfoWrapper } from "../../mypage/Profile/Info/styled";
import { translateCareer, translatePosition } from "@/utils/translateData";
import { SELECT_CAREER, SELECT_POSITIONS } from "enum";

interface InfoEditProps {
  career: string;
  setCareer: Dispatch<SetStateAction<string>>;
  position: string;
  setPosition: Dispatch<SetStateAction<string>>;
  githubUrl: string;
  setGithubUrl: Dispatch<SetStateAction<string>>;
  blogUrl: string;
  setBlogUrl: Dispatch<SetStateAction<string>>;
  portfolioUrl: string;
  setPortfolioUrl: Dispatch<SetStateAction<string>>;
}

export default function InfoEdit({
  career,
  setCareer,
  position,
  setPosition,
  githubUrl,
  setGithubUrl,
  blogUrl,
  setBlogUrl,
  portfolioUrl,
  setPortfolioUrl,
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
    setState: Dispatch<SetStateAction<string>>;
  }
  const infoData: infoDataProps[] = [
    { title: "깃허브", url: githubUrl, setState: setGithubUrl },
    { title: "블로그", url: blogUrl, setState: setBlogUrl },
    { title: "포트폴리오", url: portfolioUrl, setState: setPortfolioUrl },
  ];

  const onChangeUrl =
    (setState: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setState(e.currentTarget.value);
    };
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
            onInput={onChangeUrl(data.setState)}
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
