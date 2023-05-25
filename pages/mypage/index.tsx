import {
  Container,
  ContentsWrapper,
  TapMenu,
  TapWrapper,
} from "@/components/pages/mypage/styled";
import Profile from "@/components/pages/mypage/Profile";
import { useEffect, useState } from "react";
import { BoardCardProps } from "@/components/BoardCard";
import TabBoards from "@/components/pages/mypage/TabBoards";
import Account from "@/components/pages/mypage/Account";
import { useGetMypageData } from "@/hooks/queries/useGetMypageData";
import TabApplyBoards from "@/components/pages/mypage/TabApplyBoards";
import { ApplyBoardCardProps } from "@/components/ApplyBoardCard";

export interface MypageProps {
  id: number;
  imgUrl?: string;
  nickname: string;
  email: string;
  introduction?: string;
  tags?: string[];
  position: string;
  career: string;
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
  likeBoards?: BoardCardProps[];
  uploadBoards?: BoardCardProps[];
  applyBoards?: ApplyBoardCardProps[];
  isOwner?: boolean;
}

export default function MyPage() {
  const [boards, setBoards] = useState<BoardCardProps[] | undefined | null>(
    null,
  );

  const [applyBoard, setApplyBoard] = useState<ApplyBoardCardProps[] | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState("profile");

  const filterTap = [
    { tab: "profile", label: "프로필" },
    { tab: "likeBoards", label: "관심 게시물" },
    { tab: "uploadBoards", label: "등록 게시물" },
    { tab: "applyBoards", label: "지원목록" },
    { tab: "account", label: "계정" },
  ];

  const title = filterTap.find((filter) => filter.tab === activeTab)?.label;

  const onClickTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  const data = useGetMypageData();
  console.log(data);
  useEffect(() => {
    if (activeTab === "likeBoards" && data) {
      setBoards(data.likeBoards);
    } else if (activeTab === "uploadBoards" && data) {
      setBoards(data.uploadBoards);
    } else if (activeTab === "applyBoards" && data) {
      setApplyBoard(data.applyBoards);
    }
  }, [activeTab, data]);

  return (
    <Container>
      <TapWrapper>
        {filterTap.map((menu) => (
          <TapMenu
            key={menu.tab}
            isActive={activeTab === menu.tab}
            onClick={() => onClickTab(menu.tab)}
          >
            {menu.label}
          </TapMenu>
        ))}
      </TapWrapper>
      <ContentsWrapper>
        {!data && <div>데이터를 받아올 수 없습니다</div>}
        {data && activeTab === "profile" ? (
          <Profile {...data} />
        ) : activeTab === "account" ? (
          <Account email={data?.email || ""} nickname={data?.nickname || ""} />
        ) : activeTab === "applyBoards" ? (
          <TabApplyBoards boards={applyBoard} title={title || ""} />
        ) : (
          <TabBoards boards={boards} title={title || ""} />
        )}
      </ContentsWrapper>
    </Container>
  );
}
