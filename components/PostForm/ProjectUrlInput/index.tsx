import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "@/postFormComps/common/InputLabel";
import InputGuideText from "@/postFormComps/common/InputGuideText";
import UrlInput from "@/postFormComps/common/UrlInput";
import { FocusEventHandler } from "react";

interface ProjectUrlInputProps {
  idName: string;
  label: string;
  guideText: string;
  placeHolder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: FocusEventHandler;
}

export default function ProjectUrlInput({
  idName,
  label,
  guideText,
  placeHolder,
  value,
  handleChange,
  handleBlur,
}: ProjectUrlInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName={idName} label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
      <UrlInput
        idName={idName}
        placeholder={placeHolder}
        value={value}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
    </InputBox>
  );
}
