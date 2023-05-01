import { Wrapper, ImageContainer, Contents } from "./styled";
import Button from "../Button";

interface BannerProps {
  title: string;
  subTitle: string;
}

export default function Banner({ title, subTitle }: BannerProps) {
  return (
    <Wrapper>
      <ImageContainer>
        <Contents>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          <Button>팀원 모집하기</Button>
        </Contents>
      </ImageContainer>
    </Wrapper>
  );
}
