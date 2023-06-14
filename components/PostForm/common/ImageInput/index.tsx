import { InputStyled } from "../TextInput/styled";

interface ImageInputProps {
  idName: string;
  handleImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ImageInput({
  idName,
  handleImgChange,
}: ImageInputProps) {
  return (
    <InputStyled
      onChange={handleImgChange}
      type="file"
      id={idName}
      name={idName}
      accept="image/png, image/jpeg, image/jpg, image/gif"
    />
  );
}
