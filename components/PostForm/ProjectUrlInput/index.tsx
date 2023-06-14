import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "@/postFormComps/common/InputLabel";
import InputGuideText from "@/postFormComps/common/InputGuideText";
import UrlInput from "@/postFormComps/common/UrlInput";

interface ProjectUrlInputProps {
  idName: string;
  label: string;
  guideText: string;
  placeHolder: string;
}

export default function ProjectUrlInput({
  idName,
  label,
  guideText,
  placeHolder,
}: ProjectUrlInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName={idName} label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
      <UrlInput idName={idName} placeholder={placeHolder} />
    </InputBox>
  );
}
