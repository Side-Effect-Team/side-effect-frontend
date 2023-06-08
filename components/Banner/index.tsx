import { useRouter } from "next/router";
import { Wrapper, ImageContainer, Contents } from "./styled";
import Button from "../Button";
import { useAppSelector } from "@/store/hooks";
import useToast from "@/hooks/common/useToast";

interface BannerProps {
  title: string;
  subTitle: string;
  btnTitle: string;
  btnLink: string;
}

export default function Banner({
  title,
  subTitle,
  btnTitle,
  btnLink,
}: BannerProps) {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);
  const { addToast } = useToast();

  return (
    <Wrapper>
      <ImageContainer>
        <Contents>
          <h2>{title}</h2>
          <h3>{subTitle}</h3>
          {token ? (
            <Button onClick={() => router.push(btnLink)}>{btnTitle}</Button>
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
              {btnTitle}
            </Button>
          )}
        </Contents>
      </ImageContainer>
    </Wrapper>
  );
}
