import Link from "next/link";
import { Wrapper, ImageContainer, Contents } from "./styled";
import Button from "../Button";

interface BannerProps {
  title: string;
  subTitle: string;
  btnLink: string;
}

/** 컴포넌트 설명 : 1버튼을 가진 배너로, 버튼 링크를 설정할 수 있습니다 */
export default function Banner({ title, subTitle, btnLink }: BannerProps) {
  return (
    <Wrapper>
      <ImageContainer>
        <Contents>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          <Button>
            <Link href={btnLink}>모집하기</Link>
          </Button>
        </Contents>
      </ImageContainer>
    </Wrapper>
  );
}
