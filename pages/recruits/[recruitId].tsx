import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { breakPoints } from "../../styles/Media";
import { BASE_URL } from "../../enum";

interface RecruitType {
  id: number;
  headerTitle: string;
  tag: string[];
  title: string;
  content: string;
  createdAt: string;
  like: boolean;
}

interface RecruitProps {
  recruit: RecruitType;
}

export default function RecruitPage() {
  const [recruitsData, setRecruitsData] = useState([]);
  const router = useRouter();

  // 초기 렌더리 시 로컬스토리지에서 recruits data 받아옴
  useEffect(() => {
    let data = localStorage.getItem("recruits"); // null or ""
    if (!data) return;
    setRecruitsData(JSON.parse(data));
  }, []);

  return (
    <Wrapper>
      <Contents>
        <h1>모집 상세 페이지</h1>
        <p>모집 게시글 id: {router.query.recruitId}</p>
        {recruitsData.map((recruit: RecruitType) => {
          return (
            recruit.id === +router.query.recruitId! && (
              <Recruit key={recruit.id} recruit={recruit} />
            )
          );
        })}
      </Contents>
    </Wrapper>
  );
}

function Recruit({ recruit }: RecruitProps) {
  const { headerTitle, tag, title, content, createdAt } = recruit;
  return (
    <Wrapper>
      <Contents>
        <h1>{headerTitle}</h1>
        <div>
          {tag &&
            tag.map((t, idx) => {
              return <span key={idx}>{t}</span>;
            })}
        </div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{createdAt}</p>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colors.background};
`;

const Contents = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1rem;
  max-width: ${breakPoints.desktop}px;
`;
