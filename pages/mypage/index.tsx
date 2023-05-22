import {
  Container,
  ContentsWrapper,
  TapMenu,
  TapWrapper,
} from "@/components/pages/mypage/styled";
import Profile from "@/components/pages/mypage/Profile";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BoardCardProps } from "@/components/BoardCard";
import TabBoards from "@/components/pages/mypage/TabBoards";
import Account from "@/components/pages/mypage/Account";
import { useQuery } from "@tanstack/react-query";
import useToast from "@/hooks/useToast";

export interface MypageProps {
  id: number;
  imgUrl?: string;
  nickname: string;
  email: string;
  introduction?: string;
  stacks?: string[];
  position: string;
  career: string;
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
  likeBoards?: BoardCardProps[];
  uploadBoards?: BoardCardProps[];
  applyBoards?: BoardCardProps[];
  isOwner?: boolean;
}

export const fetchMypage = async () => {
  const token = localStorage.getItem("accessToken");
  const id = localStorage.getItem("id");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/user/mypage/${id}`,
    config,
  );
  return response;
};
export default function MyPage() {
  const { addToast, deleteToast } = useToast();

  const [boards, setBoards] = useState<BoardCardProps[] | undefined | null>(
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

  const { data } = useQuery(["mypageData"], fetchMypage, {
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "정보를 가져오지 못했습니다.",
      });
      deleteToast("unique-id");
    },
    retry: false,
  });
  useEffect(() => {
    if (activeTab === "likeBoards" && data) {
      setBoards(data.data.likeBoards);
    } else if (activeTab === "uploadBoards" && data) {
      setBoards(data.data.uploadBoards);
    } else if (activeTab === "applyBoards" && data) {
      setBoards(data.data.applyBoards);
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
          <Profile {...data.data} />
        ) : activeTab === "account" ? (
          <Account
            email={data?.data.email || ""}
            nickname={data?.data.nickname || ""}
          />
        ) : (
          <TabBoards boards={boards} title={title || ""} />
        )}
      </ContentsWrapper>
    </Container>
  );
}
