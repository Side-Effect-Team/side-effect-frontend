import { useInfiniteQuery } from "@tanstack/react-query";
import { getRecruits } from "@/apis/RecruitBoardAPI";

export const useGetRecruitData = (
  size: number,
  stackType: string,
  keyword: string,
) => {
  const { data, isLoading, isError, hasNextPage, fetchNextPage } =
    useInfiniteQuery({
      queryKey: ["recruits", stackType, keyword],
      queryFn: ({ pageParam = 1 }) =>
        getRecruits(size, stackType, keyword, pageParam),
      getNextPageParam: (lastPage) =>
        lastPage.hasNext ? lastPage.lastId : undefined,
    });

  return {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
  };
};
