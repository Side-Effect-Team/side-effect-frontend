import { useEffect, useRef } from "react";
import { Wrapper, NoListWrapper } from "./styled";
import RecruitCardSkeleton from "@/components/Skeleton/RecruitCardSkeleton";
import RecruitCard, { RecruitDataProps } from "@/components/Card/RecruitCard";
import { useGetRecruitData } from "@/hooks/queries/useGetRecruitData";
import { useObserver } from "@/hooks/common/useObserver";
import { SKILL_LIST_IN_FILTER } from "enum";
import NoData from "@/components/Nodata";

type SkillType = (typeof SKILL_LIST_IN_FILTER)[number]["value"];

interface RecruitListProps {
  skill: SkillType;
  keyword: string;
}

export default function RecruitList({ skill, keyword }: RecruitListProps) {
  const fetchMoreEl = useRef<HTMLDivElement | null>(null);
  const intersecting = useObserver(fetchMoreEl);
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useGetRecruitData(8, skill, keyword); // default size = 8

  useEffect(() => {
    if (intersecting && hasNextPage) fetchNextPage();
  }, [intersecting, hasNextPage, fetchNextPage]);

  if (data?.pages[0].recruitBoards.length === 0)
    return (
      <NoListWrapper>
        <NoData />
      </NoListWrapper>
    );

  return (
    <Wrapper>
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
    </Wrapper>
  );
}
