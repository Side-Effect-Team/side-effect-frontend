import Link from "next/link";
import { Wrapper, ImageContainer, Contents } from "./styled";
import Button from "../Button";
import { useAppSelector } from "@/store/hooks";
import useToast from "@/hooks/common/useToast";

interface BannerProps {
  title: string;
  subTitle: string;
  btnLink: string;
}

/** 컴포넌트 설명 : 1버튼을 가진 배너로, 버튼 링크를 설정할 수 있습니다 */
export default function Banner({ title, subTitle, btnLink }: BannerProps) {
  const { authenticated } = useAppSelector((state) => state.auth);
  const { addToast } = useToast();

  return (
    <Wrapper>
      <ImageContainer>
        <Contents>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          {authenticated ? (
            <Button>
              <Link href={btnLink}>모집하기</Link>
            </Button>
          ) : (
            <Button
              onClick={() =>
                addToast({
                  type: "info",
                  title: "info",
                  content: "로그인이 필요합니다",
                })
              }
            >
              모집하기
            </Button>
          )}
        </Contents>
      </ImageContainer>
    </Wrapper>
  );
}
