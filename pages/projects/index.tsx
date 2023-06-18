import { useEffect, useState } from "react";
import { useGetProjectData } from "hooks/queries/useGetProjectData";
import styled from "styled-components";
import SelectBox from "components/SelectBox";
import Search from "components/Search";
import NoData from "components/Nodata";
import PageHead from "components/PageHead";
import Banner from "components/Banner";
import ProjectList from "components/pages/project/ProjectLIst";
import ProjectCardSkeleton from "components/Skeleton/ProjectCardSkeleton";
import { useAppSelector } from "store/hooks";
import { sizes } from "styles/media";
import { media } from "styles/media";
import { BANNER_CONTENTS } from "enum";

const FILTER_OPTIONS = [
  { name: "최신순", value: "latest" },
  { name: "조회순", value: "views" },
  { name: "추천순", value: "like" },
  { name: "댓글순", value: "comment" },
];

export default function ProjectPage() {
  window.sessionStorage.removeItem("activeTab");
  const [filter, setFilter] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, Observer, refetch } = useGetProjectData(
    filter,
    keyword,
  );
  const isDataEmpty = data?.pages[0].projects.length === 0;
  const { token } = useAppSelector((state) => state.auth);
  useEffect(() => {
    refetch();
  }, [refetch, token]);
  return (
    <Wrapper>
      <PageHead pageTitle="프로젝트 자랑 | 사이드 이펙트" />

      <Banner
        type="projects"
        title={BANNER_CONTENTS.projects.title}
        subTitle={BANNER_CONTENTS.projects.subTitle}
        btnTitle="자랑하기"
        btnLink="/projects/post"
      />

      <Contents>
        <h2>전시중인 프로젝트</h2>
        <FilterSection>
          <SelectBox
            options={FILTER_OPTIONS}
            setValue={setFilter}
            title="최신순"
          />
          <Search setKeyword={setKeyword} />
        </FilterSection>

        {isDataEmpty ? (
          <NoData />
        ) : isLoading ? (
          <ProjectCardSkeleton />
        ) : (
          <ProjectList data={data} />
        )}
        {Observer()}
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  gap: 20px;
  ${media.mobile} {
    gap: 10px;
  }
`;
const FilterSection = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  padding: 0 10px;
  margin: 1.5rem 0;
`;

const Contents = styled.div`
  width: 100%;
  max-width: ${sizes.desktop}px;
  padding: 1.5rem 0;
  margin: 0 auto;
`;
