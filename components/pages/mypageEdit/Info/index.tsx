import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import SelectBox from "components/SelectBox";
import { Input } from "./styled";
import { InfoTitle, InfoWrapper } from "../../mypage/Profile/Info/styled";
import { translateCareer, translatePosition } from "utils/translateData";
import { SELECT_CAREER, SELECT_POSITIONS } from "enum";

interface InfoEditProps {
  career: string;
  setCareer: Dispatch<SetStateAction<string>>;
  position: string;
  setPosition: Dispatch<SetStateAction<string>>;
  url: UrlProps;
  setUrl: Dispatch<SetStateAction<UrlProps>>;
}
interface UrlProps {
  githubUrl: string;
  blogUrl: string;
  portfolioUrl: string;
}
interface infoDataProps {
  title: string;
  key: string;
  data: string;
}
export default function InfoEdit({
  career,
  setCareer,
  position,
  setPosition,
  url,
  setUrl,
}: InfoEditProps) {
  const [careerTitle, setCareerTitle] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  useEffect(() => {
    translateCareer(career, setCareerTitle);
    translatePosition(position, setPositionTitle);
  }, [career, position]);

  const infoData: infoDataProps[] = [
    { title: "깃허브", data: url.githubUrl, key: "githubUrl" },
    { title: "블로그", data: url.blogUrl, key: "blogUrl" },
    { title: "포트폴리오", data: url.portfolioUrl, key: "portfolioUrl" },
  ];

  const onChangeUrl = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setUrl({ ...url, [key]: e.currentTarget.value });
  };
  console.log(url);
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
            defaultValue={data.data}
            placeholder="정보를 등록해주세요"
            onInput={onChangeUrl(data.key)}
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
