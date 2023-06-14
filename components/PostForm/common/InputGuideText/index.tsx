import { Wrapper } from "./styled";

interface InputGuideTextProps {
  guideText: string;
}

export default function InputGuideText({ guideText }: InputGuideTextProps) {
  return <Wrapper>{guideText}</Wrapper>;
}
