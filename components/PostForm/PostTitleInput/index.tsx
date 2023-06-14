import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "components/PostForm/common/InputLabel";
import InputGuideText from "components/PostForm/common/InputGuideText";
import TextInput from "components/PostForm/common/TextInput";

interface PostTitleInputProps {
  idName: string;
  label: string;
  guideText: string;
  placeHolder: string;
}

export default function PostTitleInput({
  idName,
  label,
  guideText,
  placeHolder,
}: PostTitleInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName={idName} label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
      <TextInput idName={idName} placeholder={placeHolder} />
    </InputBox>
  );
}
