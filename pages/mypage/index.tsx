import {
  Container,
  ContentsWrapper,
  TapMenu,
  TapWrapper,
} from "@/components/pages/mypage/styled";
import Profile from "@/components/pages/mypage/Profile";
import { useEffect, useState } from "react";
import axios from "axios";
import { BoardCardProps } from "@/components/BoardCard";
import TabBoards from "@/components/pages/mypage/TabBoards";

export interface MypageProps {
  id?: number;
  imgUrl?: string;
  nickname?: string;
  email?: string;
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

export default function MyPage() {
  const [data, setData] = useState<MypageProps | null>(null);
  const [boards, setBoards] = useState<BoardCardProps[] | undefined | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/mypage/${id}`,
          config,
        );
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        setData(null);
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [activeTab, setActiveTab] = useState("profile");

  const onClickTab = (tabName: string) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    if (activeTab === "likeBoards" && data) {
      setBoards(data.likeBoards);
    } else if (activeTab === "uploadBoards" && data) {
      setBoards(data.uploadBoards);
    } else if (activeTab === "applyBoards" && data) {
      setBoards(data.applyBoards);
    }
  }, [activeTab]);

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
        {!data && <div>데이터를 받아올 수 없습니다</div>}
        {data && activeTab === "profile" ? (
          <Profile {...data} />
        ) : (
          <TabBoards boards={boards} title={activeTab} />
        )}
      </ContentsWrapper>
    </Container>
  );
}
