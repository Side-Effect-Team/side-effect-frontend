import { useQuery } from "@tanstack/react-query";
import BoardCard from "../../BoardCard";
import { Wrapper, CarouselTitle, CardContainer } from "./styled";
import axios from "axios";

interface BatchCarouselProps {
  title: string;
  maxCards: number;
}

export default function BatchCarousel({ title, maxCards }: BatchCarouselProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["newRecruits"],
    queryFn: () => fetchNewRecruits(maxCards),
  });

  return (
    <Wrapper>
      <CarouselTitle>{title}</CarouselTitle>
      {isLoading && <h2>Loading...</h2>}
      {isError && <h2>데이터를 불러오는데 실패했습니다</h2>}
      <CardContainer>
        {data &&
          data.map((recruit: RecruitType) => {
            return (
              <BoardCard key={recruit.id} category="projects" data={recruit} />
            );
          })}
      </CardContainer>
    </Wrapper>
  );
}

const fetchNewRecruits = async (size: number) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/scroll?size=${size}`;
  const res = await axios.get(url);
  return res.data.recruitBoards;
};
