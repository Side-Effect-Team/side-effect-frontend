import { Wrapper, LabelStyled, InputStyled } from "./styled";

interface TitleBoxProps {
  label: string;
  inputId: string;
  placeholder?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function TitleBox({
  label,
  inputId,
  placeholder,
  handleChange,
}: TitleBoxProps) {
  return (
    <Wrapper>
      <LabelStyled htmlFor={inputId}>{label}</LabelStyled>
      <InputStyled
        type="text"
        name={inputId}
        id={inputId}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </Wrapper>
  );
}
