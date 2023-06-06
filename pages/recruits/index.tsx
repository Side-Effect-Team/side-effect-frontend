import { useEffect, useRef } from "react";
import styled from "styled-components";
import { breakPoints, mediaQuery } from "@/styles/Media";
import Banner from "@/components/Banner";
import { BANNER_CONTENTS } from "../../enum";
import PageHead from "@/components/PageHead";
import RecruitCard from "@/components/Card/RecruitCard";
import { RecruitDataProps } from "@/components/Card/RecruitCard";
import RecruitCardSkeleton from "@/components/Skeleton/RecruitCardSkeleton";
import { useGetRecruitData } from "@/hooks/queries/useGetRecruitData";
import { useObserver } from "@/hooks/common/useObserver";

export default function RecruitsPage() {
  window.sessionStorage.removeItem("activeTab");
  const fetchMoreEl = useRef<HTMLDivElement | null>(null);
  const intersecting = useObserver(fetchMoreEl);
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetRecruitData();

  useEffect(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage, fetchNextPage]);

  return (
    <Wrapper>
      <PageHead pageTitle="팀원 모집 | 사이드 이펙트" />
      <Banner
        title={BANNER_CONTENTS.TITLE}
        subTitle={BANNER_CONTENTS.SUB_TITLE}
        btnLink="/post/recruit"
      />
      <Contents>
        <ContentsHeader>
          <div>
            <h2>팀원 모집 게시판</h2>
          </div>
          <FilterBox>
            <select>
              <option value="">선택하세요</option>
              <option value="nodejs">Nodejs</option>
              <option value="java">Java</option>
              <option value="spring">Spring</option>
              <option value="python">Python</option>
              <option value="django">Django</option>
              <option value="swift">Swift</option>
              <option value="kotlin">Kotlin</option>
            </select>
            <input type="search" placeholder="검색할 내용을 입력하세요" />
          </FilterBox>
        </ContentsHeader>
        <ContentsMain>
          {isLoading && (
            <>
              <RecruitCardSkeleton />
              <RecruitCardSkeleton />
              <RecruitCardSkeleton />
              <RecruitCardSkeleton />
            </>
          )}
          {isError && <h2>일시적으로 페이지를 로드할 수 없습니다</h2>}
          {data?.pages.map((page) =>
            page.recruitBoards.map((recruit: RecruitDataProps) => (
              <RecruitCard key={recruit.id} data={recruit} />
            )),
          )}
          <div ref={fetchMoreEl} />
        </ContentsMain>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.mainBackGround};
`;

const Contents = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1rem;
  max-width: ${breakPoints.desktop}px;
`;

const ContentsHeader = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FilterBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  select {
    margin-right: 1rem;
  }
  input {
    width: 250px;
  }
`;

const ContentsMain = styled.main`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;

  ${mediaQuery("mobile")`
  display: flex;
  flex-direction: column;
`}
`;
