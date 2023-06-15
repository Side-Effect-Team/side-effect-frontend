import { FocusEventHandler } from "react";
import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import InputLabel from "components/PostForm/common/InputLabel";
import InputGuideText from "components/PostForm/common/InputGuideText";
import TextInput from "components/PostForm/common/TextInput";
import FormErrMsg from "@/postFormComps/common/FormErrMsg";

interface PostTitleInputProps {
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

export default function PostTitleInput({
  idName,
  label,
  guideText,
  placeHolder,
  value,
  touched,
  errMsg,
  handleChange,
  handleBlur,
}: PostTitleInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName={idName} label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
      <TextInput
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
