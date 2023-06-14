import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "@/postFormComps/common/InputLabel";
import InputGuideText from "@/postFormComps/common/InputGuideText";
import UrlInput from "@/postFormComps/common/UrlInput";
import { FocusEventHandler } from "react";
import FormErrMsg from "@/postFormComps/common/FormErrMsg";

interface ProjectUrlInputProps {
  idName: string;
  label: string;
  guideText: string;
  placeHolder: string;
  value: string;
  touched: boolean;
  errMsg: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleBlur: FocusEventHandler;
}

export default function ProjectUrlInput({
  idName,
  label,
  guideText,
  placeHolder,
  value,
  touched,
  errMsg,
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
      {touched && errMsg && <FormErrMsg msg={errMsg} />}
    </InputBox>
  );
}
