import {
  Container,
  ContentsWrapper,
  TapMenu,
  TapWrapper,
} from "@/components/pages/mypage/styled";
import Profile from "@/components/pages/mypage/Profile";
import { useState } from "react";
import LikeBoards from "@/components/pages/mypage/LikeBoards";
import UploadBoards from "@/components/pages/mypage/UploadBoards";
import ApplyBoards from "@/components/pages/mypage/ApplyBoards";

export interface DataProps {
  avatarSrc?: string;
  nickname: string;
  email: string;
  introduction?: string;
  // boards: number;
  // follower: number;
  // following: number;
  skill?: string[];
  // position: string;
  position:
    | "프론트엔드"
    | "백엔드"
    | "디자이너"
    | "데브옵스"
    | "기획자"
    | "마케터";
  // career: string;
  career: "0" | "1~3" | "4~6" | "7년 이상";
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
  career: "1~3",
  github: "https://github.com",
  blog: "https://www.naver.com",
  portfolio: "https://www.naver.com",
};
export default function MyPage() {
  const [activeTab, setActiveTab] = useState("profile");

  const onClickTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <Container>
      <TapWrapper>
        <TapMenu
          isActive={activeTab === "profile"}
          onClick={() => onClickTab("profile")}
        >
          프로필
        </TapMenu>
        <TapMenu
          isActive={activeTab === "likeBoards"}
          onClick={() => onClickTab("likeBoards")}
        >
          관심 게시물
        </TapMenu>
        <TapMenu
          isActive={activeTab === "uploadBoards"}
          onClick={() => onClickTab("uploadBoards")}
        >
          등록 게시물
        </TapMenu>
        <TapMenu
          isActive={activeTab === "applyBoards"}
          onClick={() => onClickTab("applyBoards")}
        >
          지원목록
        </TapMenu>
      </TapWrapper>
      <ContentsWrapper>
        {activeTab === "profile" && <Profile {...data} />}
        {activeTab === "likeBoards" && <LikeBoards />}
        {activeTab === "uploadBoards" && <UploadBoards />}
        {activeTab === "applyBoards" && <ApplyBoards />}
      </ContentsWrapper>
    </Container>
  );
}
