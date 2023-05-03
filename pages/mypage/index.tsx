import { useRouter } from "next/router";
import { Wrapper } from "./styled";
import { SectionWrapper } from "./styled";
import { SectionHeaderWrapper } from "./styled";
import { SectionTitle } from "./styled";
import { Border } from "./styled";
import { ButtonWrapper } from "./styled";
import Button from "../../components/Button";
import Introduction from "../../components/pages/Mypage/Introduction";
import Skill from "../../components/pages/Mypage/Skill";
import Info from "../../components/pages/Mypage/Info";

export interface DataProps {
  avatarSrc?: string;
  nickname: string;
  introduction?: string;
  boards: number;
  follower: number;
  following: number;
  skill?: string[];
  position: string;
  career: string;
  github: string;
  blog: string;
  portfolio: string;
}
export interface MyPageProps {
  data?: DataProps;
}

export default function MyPage() {
  const data = {
    avatarSrc: "/images/ProjectDefaultBackground.png",
    nickname: "자라는개발자",
    introduction:
      "프론트엔드 개발자를 꿈꾸는 취준생입니다. 프로젝트 경험하고 싶어요",
    boards: 1,
    follower: 20,
    following: 30,
    skill: ["typescript", "react", "HTML", "Next.js", "React.native"],
    position: "프론트엔드",
    career: "신입",
    github: "https://github.com",
    blog: "https://www.naver.com",
    portfolio: "https://www.naver.com",
  };

  const router = useRouter();
  const onClickGoToEditProfile = () => {
    router.push("/mypage/edit");
  };

  return (
    <Wrapper>
      <Introduction data={data} />
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Skill</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Skill data={data} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Info</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Info data={data} />
      </SectionWrapper>
      <ButtonWrapper>
        <Button onClick={onClickGoToEditProfile}>프로필 수정하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
