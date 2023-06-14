import { InputBox } from "@/postFormComps/common/Form.styled";
import InputLabel from "@/postFormComps/common/InputLabel";
import { TextareaStyled } from "@/postFormComps/DescriptionInput/styled";

interface DescriptionInputProps {
  idName: string;
  label: string;
}

export default function DescriptionInput({
  idName,
  label,
}: DescriptionInputProps) {
  return (
    <InputBox>
      <InputLabel idName={idName} label={label} />
      <TextareaStyled />
    </InputBox>
  );
}
