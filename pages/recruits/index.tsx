import { useEffect, useRef, useState } from "react";
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
import SelectBox from "@/components/SelectBox";
import { SKILL_LIST } from "../../enum";

type SkillType = (typeof SKILL_LIST)[number]["value"];

export default function RecruitsPage() {
  window.sessionStorage.removeItem("activeTab");
  const [skill, setSkill] = useState<SkillType>("javascript");
  const [keyword, setKeyword] = useState<string>("");
  const fetchMoreEl = useRef<HTMLDivElement | null>(null);
  const intersecting = useObserver(fetchMoreEl);
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetRecruitData(8, skill, keyword); // default size = 8

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
          <h2>팀원 모집 게시판</h2>
          <FilterBox>
            <SelectBoxWrapper>
              <SelectBox
                options={SKILL_LIST}
                setValue={setSkill}
                title="JavaScript"
              />
            </SelectBoxWrapper>
            <SearchInput
              type="text"
              placeholder="검색할 내용을 입력하세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
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
`;

const SelectBoxWrapper = styled.div`
  width: 150px;
`;

const SearchWrapper = styled.div``;

const SearchInput = styled.input`
  padding: 0.5rem;
  width: 225px;
`;

const FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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
