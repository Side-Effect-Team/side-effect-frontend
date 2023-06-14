import { InputBox } from "@/postFormComps/common/Form.styled";
import InputLabel from "@/postFormComps/common/InputLabel";
import { TextareaStyled } from "@/postFormComps/DescriptionInput/styled";
import { FocusEventHandler } from "react";
import FormErrMsg from "@/postFormComps/common/FormErrMsg";

interface DescriptionInputProps {
  idName: string;
  label: string;
  touched: boolean;
  errMsg: string;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  handleBlur: FocusEventHandler;
}

export default function DescriptionInput({
  idName,
  label,
  value,
  touched,
  errMsg,
  handleChange,
  handleBlur,
}: DescriptionInputProps) {
  return (
    <InputBox>
      <InputLabel idName={idName} label={label} />
      <TextareaStyled
        value={value}
        id={idName}
        name={idName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched && errMsg && <FormErrMsg msg={errMsg} />}
    </InputBox>
  );
}
