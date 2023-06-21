import { ChangeEvent, Dispatch, SetStateAction } from "react";
import {
  FiledWrapper,
  GuideText,
  InputGuideWrapper,
  IntroductionTitle,
  IntroductionWrapper,
  TextArea,
} from "./styled";

interface IntroductionProps {
  introduction: string;
  setIntroduction: Dispatch<SetStateAction<string>>;
}
export default function Introduction({
  introduction,
  setIntroduction,
}: IntroductionProps) {
  const onChangeIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
  };
  return (
    <IntroductionWrapper>
      <IntroductionTitle>소개:</IntroductionTitle>
      <FiledWrapper>
        <TextArea
          defaultValue={introduction}
          onInput={onChangeIntroduction}
          placeholder={"소개를 적어주세요"}
          maxLength={50}
        />
        <InputGuideWrapper>
          <GuideText>
            팀원들에게 본인을 소개할 간단한 인사말을 적어주세요.
          </GuideText>
          <GuideText>{introduction ? introduction.length : 0}/50</GuideText>
        </InputGuideWrapper>
      </FiledWrapper>
    </IntroductionWrapper>
  );
}
