import styled from "styled-components";
import SelectBox from "../../components/SelectBox";
import BoardCard from "../../components/BoardCard";
import { breakPoints } from "../../styles/Media";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/router";
import { useInfiniteQuery } from "@tanstack/react-query";
const FILTER_OPTIONS = ["조회순", "추천순", "댓글순"];
const data = [
  {
    id: 1,
    headerImage: "/images/ProjectDefaultBackground.png",
    tag: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 15,
  },
  {
    id: 2,
    headerImage: "/images/ProjectDefaultBackground.png",
    tag: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 16,
  },
  {
    id: 3,
    headerImage: "/images/ProjectDefaultBackground.png",
    tag: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
  {
    id: 4,
    headerImage: "/images/ProjectDefaultBackground.png",
    tag: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
  {
    id: 5,
    headerImage: "/images/ProjectDefaultBackground.png",
    tag: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
];

export default function ProjectPage() {
  const [filter, setFilter] = useState("조회순");
  const router = useRouter();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const handleCardRoute = (id: number) => {
    router.push(`/project/${id}`);
  };

  const fetchMockData = async (page: number) => {
    const response = await fetch(`https://koreanjson.com/users`);
    return response.json();
  };
  const {
    data: testData,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isSuccess,
  } = useInfiniteQuery(
    ["test"],
    ({ pageParam = 1 }) => fetchMockData(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length + 1;
        return nextPage;
      },
    },
  );
  console.log(testData);
  console.log(hasNextPage);

  return (
    <Wrapper>
      <HeaderSection>
        <h2>이달의 프로젝트</h2>
        <TempCarousel>캐러셀</TempCarousel>
      </HeaderSection>
      <FilterSection>
        <SelectBox
          options={FILTER_OPTIONS}
          value={filter}
          setValue={setFilter}
          size="large"
        />
        <input placeholder="검색" />
      </FilterSection>

      <CardSection>
        {data.map((data) => {
          return <BoardCard key={data.id} data={data} />;
        })}
      </CardSection>
      {isSuccess &&
        testData.pages.map((page) => {
          return page.map((item: any) => {
            return <div key={item.id}>{item.name}</div>;
          });
        })}
      <div ref={ref} style={{ backgroundColor: "red", height: "50px" }}>
        awdawd
      </div>
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
  max-width: ${breakPoints.desktop}px;
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
  justify-content: flex-end;
`;

const CardSection = styled.main`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 20px;
  margin-bottom: 1rem;
`;
