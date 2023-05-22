import styled from "styled-components";
import SelectBox from "../../components/SelectBox";
import BoardCard from "../../components/BoardCard";
import Search from "@/components/Search";
import { breakPoints } from "@/styles/Media";
import { useState } from "react";
import { media } from "@/styles/mediatest";
import ScaleLoader from "react-spinners/ScaleLoader";
import PageHead from "@/components/PageHead";
import BatchCarousel from "@/components/Carousel/BatchCarousel";
import { useGetProjectData } from "../../hooks/queries/useGetProjectData";
import Image from "next/image";
import NodataImg from "../../public/images/Nodata.png";
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
  //threshold : inview가 보여지는 정도를 0~1까지 조절하여 트리거시점을 조절할수있다 0이면 보이자마자 트리거 1이면 전체가 다보여야 트리거
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
        <TestDiv>
          <Image
            src={NodataImg}
            alt="검색된 결과가 없습니다"
            width={500}
            height={500}
          />
          <p>검색된 결과가 없습니다!</p>
        </TestDiv>
      ) : isLoading ? (
        <TestDiv>
          <ScaleLoader height={150} width={15} />
        </TestDiv>
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
const TestDiv = styled.div`
  min-height: 600px;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
`;
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
