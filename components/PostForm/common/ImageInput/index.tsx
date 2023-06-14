import { InputStyled } from "../TextInput/styled";

interface ImageInputProps {
  idName: string;
}

export default function ImageInput({ idName }: ImageInputProps) {
  return (
    <InputStyled
      type="file"
      id={idName}
      name={idName}
      accept="image/png, image/jpeg, image/jpg, image/gif"
    />
  );
}
