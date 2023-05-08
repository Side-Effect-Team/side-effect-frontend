import { useRouter } from "next/router";
import Button from "../../components/Button";
import Introduction from "../../components/pages/mypage/Introduction";
import Skill from "../../components/pages/mypage/Skill";
import Info from "../../components/pages/mypage/Info";
import {
  Border,
  ButtonWrapper,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
  Wrapper,
} from "@/components/pages/mypage/styled";

export interface DataProps {
  avatarSrc?: string;
  nickname: string;
  email: string;
  introduction?: string;
  // boards: number;
  // follower: number;
  // following: number;
  skill?: string[];
  position: string;
  career: string;
  github?: string;
  blog?: string;
  portfolio?: string;
}
export interface MyPageProps {
  data?: DataProps;
}

const data: DataProps = {
  avatarSrc: "/images/ProjectDefaultBackground.png",
  nickname: "자라는개발자",
  email: "sideeffect@naver.com",
  introduction:
    "프론트엔드 개발자를 꿈꾸는 취준생입니다. 프로젝트 경험하고 싶어요",
  // boards: 1,
  // follower: 20,
  // following: 30,
  skill: ["typescript", "react", "HTML", "Next.js", "React.native"],
  position: "프론트엔드",
  career: "신입",
  github: "https://github.com",
  blog: "https://www.naver.com",
  portfolio: "https://www.naver.com",
};
export default function MyPage() {
  const router = useRouter();
  const onClickGoToEditProfile = () => {
    router.push("/mypage/edit");
  };

  return (
    <Wrapper>
      <Introduction
        avatarSrc={data.avatarSrc}
        nickname={data.nickname}
        email={data.email}
        introduction={data.introduction}
        // boards={data.boards}
        // follower={data.follower}
        // following={data.following}
      />
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Skill</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Skill skill={data.skill} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Info</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Info
          position={data.position}
          career={data.career}
          github={data.github}
          blog={data.blog}
          portfolio={data.portfolio}
        />
      </SectionWrapper>
      <ButtonWrapper>
        <Button onClick={onClickGoToEditProfile}>프로필 수정하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
