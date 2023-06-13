import { ImageWrapper, StyledImage } from "./styled";
import TestImg from "../../../../../public/images/ProjectBackground.png";
import { motion } from "framer-motion";
export default function LeftSection({
  selectedImage,
}: {
  selectedImage: string;
}) {
  return (
    <ImageWrapper>
      <StyledImage
        key={selectedImage}
        src={`${process.env.NEXT_PUBLIC_API_URL}/free-boards/image/${selectedImage}`}
        alt="베스트 프로젝트 썸네일 이미지"
        width={600}
        height={600}
      />
    </ImageWrapper>
  );
}
