import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "@/postFormComps/common/InputLabel";
import InputGuideText from "@/postFormComps/common/InputGuideText";

interface ImageInputProps {
  idName: string;
  label: string;
  guideText: string;
}

export default function ImageInput({
  idName,
  label,
  guideText,
}: ImageInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName={idName} label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
    </InputBox>
  );
}
