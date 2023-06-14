import Image from "next/image";
import { InputBox, InputHeader } from "@/postFormComps/common/Form.styled";
import { ImageContainer } from "@/detailComps/ContentDetail/styled";
import InputLabel from "@/postFormComps/common/InputLabel";
import InputGuideText from "@/postFormComps/common/InputGuideText";
import ImageInput from "@/postFormComps/common/ImageInput";

interface ProjectImageInputProps {
  idName: string;
  label: string;
  guideText: string;
  defaultImageGuideText: string;
  imgSrc: string;
  handleImgChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function ProjectImageInput({
  idName,
  label,
  guideText,
  defaultImageGuideText,
  imgSrc,
  handleImgChange,
}: ProjectImageInputProps) {
  return (
    <InputBox>
      <InputHeader>
        <InputLabel idName={idName} label={label} />
        <InputGuideText guideText={guideText} />
      </InputHeader>
      <ImageInput idName={idName} handleImgChange={handleImgChange} />
      <InputGuideText guideText={defaultImageGuideText} />
      <ImageContainer>
        <Image
          src={imgSrc}
          alt={label}
          style={{ objectFit: "contain" }}
          fill
          priority
        />
      </ImageContainer>
    </InputBox>
  );
}
