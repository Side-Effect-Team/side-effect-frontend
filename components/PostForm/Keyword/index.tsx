import { Wrapper, ButtonStyled } from "./styled";

interface KeywordProps {
  skill: {
    name: string;
    value: string;
  };
  addTag: (value: string) => void;
  isActive: boolean;
}

export default function Keyword({ skill, addTag, isActive }: KeywordProps) {
  return (
    <Wrapper onClick={() => addTag(skill.name)} isActive={isActive}>
      <ButtonStyled type="button">{skill.name}</ButtonStyled>
    </Wrapper>
  );
}
