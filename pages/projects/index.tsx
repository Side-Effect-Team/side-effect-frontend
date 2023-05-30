import { breakPoints } from "@/styles/Media";
import { useState } from "react";
import { useGetProjectData } from "../../hooks/queries/useGetProjectData";
import styled from "styled-components";
import SelectBox from "../../components/SelectBox";
import Search from "@/components/Search";
import NoData from "@/components/Nodata";
import PageHead from "@/components/PageHead";
import BatchCarousel from "@/components/Carousel/BatchCarousel";
import ProjectList from "@/components/pages/project/ProjectLIst";
import Skeleton from "@/components/Skeleton/BoardCardSkeleton";
const FILTER_OPTIONS = [
  { name: "최신순", value: "latest" },
  { name: "조회순", value: "views" },
  { name: "추천순", value: "like" },
  { name: "댓글순", value: "comment" },
];

export default function ProjectPage() {
  const [filter, setFilter] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, Observer } = useGetProjectData(filter, keyword);
  const isDataEmpty = data?.pages[0].projects.length === 0;
  return (
    <Wrapper>
      <PageHead pageTitle="프로젝트 자랑 | 사이드 이펙트" />
      <BatchCarousel
        title="이달의 베스트 프로젝트"
        category="projects"
        maxCards={8}
        queryKey="topLikedProjects"
      />

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
        <Skeleton />
      ) : (
        <ProjectList data={data} />
      )}
      {Observer()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${breakPoints.desktop}px;
  margin: 0 auto;
  gap: 20px;
`;
const FilterSection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
