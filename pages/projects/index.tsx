import styled from "styled-components";
import SelectBox from "../../components/SelectBox";
import BoardCard from "../../components/BoardCard";
import Search from "@/components/Search";
import { breakPoints, mediaQuery } from "@/styles/Media";
import { useState, useEffect, ChangeEvent } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../store/hooks";
import { openModal } from "../../store/modalSlice";
import { media } from "@/styles/mediatest";
import axios from "axios";
import PageHead from "@/components/PageHead";
const FILTER_OPTIONS = [
  { name: "최신순", value: "latest" },
  { name: "조회순", value: "view" },
  { name: "추천순", value: "like" },
  { name: "댓글순", value: "comment" },
];

interface ProjectList {
  id: number;
  content: string;
  title: string;
  createdAt: string;
}
interface InfiniteProjectType {
  hasNext: boolean;
  lastId: number;
  projects: ProjectList[];
}
export default function ProjectPage() {
  const [filter, setFilter] = useState("latest");
  const [keyword, setKeyword] = useState("");
  //threshold : inview가 보여지는 정도를 0~1까지 조절하여 트리거시점을 조절할수있다 0이면 보이자마자 트리거 1이면 전체가 다보여야 트리거
  const { ref, inView } = useInView({ threshold: 0 });

  const getProjectsData = async (page: number) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/free-boards/scroll?lastId=${page}&size=4`,
    );
    return response.data;
  };

  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, isSuccess } =
    useInfiniteQuery(
      ["projectData"],
      ({ pageParam = -1 }): Promise<InfiniteProjectType> =>
        getProjectsData(pageParam),
      {
        //**getNextPageParam 에서 return 된값은 pageParam 으로 넘어갑니다. */
        getNextPageParam: (lastPage) => {
          return lastPage.lastId === 1 ? undefined : lastPage.lastId;
        },
      },
    );

  useEffect(() => {
    if (inView && hasNextPage === true) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage]);
  const dispatch = useAppDispatch();
  console.log(filter);
  return (
    <Wrapper>
      <PageHead pageTitle="프로젝트 자랑 | 사이드 이펙트" />
      <button
        onClick={() => dispatch(openModal({ modalType: "ManageTeamModal" }))}
      >
        awdawd
      </button>
      <HeaderSection>
        <h2>이달의 프로젝트</h2>
        <TempCarousel>캐러셀</TempCarousel>
      </HeaderSection>

      <FilterSection>
        <SelectBox
          options={FILTER_OPTIONS}
          setValue={setFilter}
          title="최신순"
        />
        <Search setKeyword={setKeyword} />
      </FilterSection>

      <CardSection>
        {isSuccess &&
          data?.pages.map((page) => {
            return page.projects.map((project) => {
              return <BoardCard key={project.id} data={project} />;
            });
          })}
      </CardSection>

      <div ref={ref}>{isFetchingNextPage && "데이터 불러오는중"}</div>
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
const TempCarousel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #eaa6a6;
  width: 100%;
  height: 300px;
  margin-top: 1rem;
`;
const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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
  ${mediaQuery("mobile")`
  display: flex;
  flex-direction: column;
`}
`;
