import { useQuery } from "@tanstack/react-query";
import ProjectCard from "../../Card/ProjectCard";
import RecruitCard from "@/components/Card/RecruitCard";
import { Wrapper, CarouselTitle, CardContainer } from "./styled";
import customAxios from "@/apis/customAxios";
import { RecruitDataProps } from "@/components/Card/RecruitCard";
import { BoardCardProps } from "@/components/Card/ProjectCard";

interface BatchCarouselProps {
  title: string;
  category: "recruits" | "projects";
  maxCards: number;
  queryKey: string;
}

export default function BatchCarousel({
  title,
  category,
  maxCards,
  queryKey,
}: BatchCarouselProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(maxCards, queryKey),
  });

  if (!data) {
    return (
      <Wrapper>
        <CarouselTitle>{title}</CarouselTitle>
        {isLoading && <h2>Loading...</h2>}
        {isError && <h2>데이터를 불러오는데 실패했습니다</h2>}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CarouselTitle>{title}</CarouselTitle>
      <CardContainer>
        {data.length && category === "recruits"
          ? data.map((recruit: RecruitDataProps) => {
              return <RecruitCard key={recruit.id} data={recruit} />;
            })
          : data.map((project: BoardCardProps) => {
              return <ProjectCard key={project.id} data={project} />;
            })}
      </CardContainer>
    </Wrapper>
  );
}

const fetchData = async (size: number, queryKey: string) => {
  let url = process.env.NEXT_PUBLIC_API_URL!;
  let selector = "";

  // 최신 모집글
  if (queryKey === "newRecruits") {
    url += `/recruit-board/scroll?size=${size}`;
    selector = "recruitBoards";
  }

  // 좋아요 많은 순, 최신순 프로젝트 자랑글
  if (queryKey === "topLikedProjects") {
    url += `/free-boards/scroll?filter=like&size=${size}`;
    selector = "projects";
  }

  const res = await customAxios.get(url);
  return res.data[selector];
};
