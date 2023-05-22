import { breakPoints } from "@/styles/Media";
import { useState } from "react";
import { media } from "@/styles/mediatest";
import { useGetProjectData } from "../../hooks/queries/useGetProjectData";
import styled from "styled-components";
import SelectBox from "../../components/SelectBox";
import BoardCard from "../../components/BoardCard";
import Search from "@/components/Search";
import NoData from "@/components/Nodata";
import Loading from "@/components/Loading";
import PageHead from "@/components/PageHead";
import BatchCarousel from "@/components/Carousel/BatchCarousel";
const FILTER_OPTIONS = [
  { name: "최신순", value: "latest" },
  { name: "조회순", value: "views" },
  { name: "추천순", value: "like" },
  { name: "댓글순", value: "comment" },
];

interface ProjectList {
  id: number;
  content: string;
  title: string;
  createdAt: string;
}

export default function ProjectPage() {
  const [filter, setFilter] = useState("latest");
  const [keyword, setKeyword] = useState("");
  const { data, isLoading, Observer } = useGetProjectData(filter, keyword);
  const noData = data?.pages[0].projects.length === 0;
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

      {noData ? (
        <NoData />
      ) : isLoading ? (
        <Loading width={10} height={150} />
      ) : (
        <CardSection>
          {data?.pages.map((page) => {
            return page.projects.map((project: ProjectList) => {
              return (
                <BoardCard
                  key={project.id}
                  data={project}
                  category="projects"
                />
              );
            });
          })}
        </CardSection>
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
const CardSection = styled.main`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 1rem;
  column-gap: 1rem;
  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;
