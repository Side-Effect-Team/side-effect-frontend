import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageTransition from "@/components/pages/userInfoPage/PageTransition";
import { Wrapper, ButtonWrapper } from "@/components/pages/userInfoPage/styled";
import Button from "../../components/Button";
export default function Success() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string | null>("");

  useEffect(() => {
    const handleBackButton = () => {
      router.push("/");
    };
    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    setNickname(storedNickname);
  }, []);
  const handlePageRoute = (url: string) => {
    localStorage.removeItem("nickname");
    router.push(url);
  };
  return (
    <PageTransition>
      <Wrapper>
        <h1>{nickname}님 가입을 환영합니다.</h1>
        <ButtonWrapper>
          <Button size="large" onClick={() => handlePageRoute("/")}>
            HOME
          </Button>
          <Button size="large" onClick={() => handlePageRoute("/recruits")}>
            팀 구하러 가기
          </Button>
          <Button size="large" onClick={() => handlePageRoute("/projects")}>
            프로젝트 구경하러 가기
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </PageTransition>
  );
}
