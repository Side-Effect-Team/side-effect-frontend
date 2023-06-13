import { ImageWrapper, StyledImage } from "./styled";
export default function LeftSection({
  selectedImage,
  id,
}: {
  selectedImage: string;
  id: number;
}) {
  return (
    <ImageWrapper href={`projects/${id}`}>
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
