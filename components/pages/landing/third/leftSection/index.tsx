import { ImageWrapper, StyledImage } from "./styled";
import TestImg from "../../../../../public/images/ProjectBackground.png";

export default function LeftSection({data}:any) {
  return (
    <ImageWrapper>
      <StyledImage src={TestImg} alt="d" />
    </ImageWrapper>
  );
}
