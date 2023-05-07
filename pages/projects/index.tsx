import styled from "styled-components";
import SelectBox from "../../components/SelectBox";
import BoardCard from "../../components/BoardCard";
import { breakPoints, mediaQuery } from "@/styles/Media";
import { useState, useEffect, ChangeEvent } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useAppDispatch } from "../../store/hooks";
import { openModal } from "../../store/modalSlice";
import { media } from "@/styles/mediatest";
import axios from "axios";
const FILTER_OPTIONS = ["조회순", "추천순", "댓글순"];
const data = [
  {
    id: 1,
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
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
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
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
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
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
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
  {
    id: 6,
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
  {
    id: 7,
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
  {
    id: 8,
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
  {
    id: 9,
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
    title: "Oh My Pet",
    content:
      "내 반려동물이 인플루언서? 반려동물 자랑 플랫폼 오 마이 펫 프로젝트 입니다.",
    createdAt: "2023.05.04",
    like: true,
    likeNum: 65,
    commentNum: 17,
  },
  {
    id: 10,
    category: "projects",
    headerImage: "/images/ProjectDefaultBackground.png",
    // tags: ["Figma", "Spring", "React"],
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
  const [text, setText] = useState("");
  //threshold : inview가 보여지는 정도를 0~1까지 조절하여 트리거시점을 조절할수있다 0이면 보이자마자 트리거 1이면 전체가 다보여야 트리거
  const { ref, inView } = useInView({ threshold: 1 });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const fetchMockData = async (page: number) => {
    const response = await fetch(
      `http://54.64.103.42:8080/api/free-boards/scroll?size=${page}`,
    );
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
    ({ pageParam = 4 }) => fetchMockData(pageParam),
    {
      getNextPageParam: (allPages) => {
        const nextPage = allPages.length + 1;
        console.log("nextPage", nextPage);
        return nextPage;
      },
    },
  );

  console.log(testData);
  console.log(hasNextPage);

  const dispatch = useAppDispatch();
  const handleTextValue = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Wrapper>
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
          value={filter}
          setValue={setFilter}
          size="large"
        />
        <input placeholder="검색" onChange={(e) => handleTextValue(e)} />
      </FilterSection>

      <CardSection>
        {data.map((data) => {
          return <BoardCard key={data.id} data={data} />;
        })}
      </CardSection>
      <div ref={ref}></div>
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
