import { ImageWrapper, StyledImage } from "./styled";
import { useInView } from "react-intersection-observer";
export default function LeftSection({
  selectedImage,
  id,
}: {
  selectedImage: string;
  id: number;
}) {
  const { ref, inView } = useInView();
  return (
    <ImageWrapper href={`projects/${id}`} ref={ref} inView={inView}>
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
