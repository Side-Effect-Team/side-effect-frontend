import { useInfiniteQuery } from "@tanstack/react-query";
import { getProjectData } from "apis/ProjectAPI";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Skeleton from "@/components/Skeleton";
export const useGetProjectData = (
  filter: string = "",
  keyword: string = "",
) => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isSuccess,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["projectData", filter, keyword],
    ({ pageParam = -1 }) => getProjectData(pageParam, filter, keyword),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.lastId === 1 ? undefined : lastPage.lastId;
      },
    },
  );
  const Observer = () => {
    const [ref, inView] = useInView({ threshold: 1 });
    useEffect(() => {
      if (!data) return;
      if (hasNextPage && inView) fetchNextPage();
    }, [inView]);

    // 더이상 불러올 데이터가 없다면 옵저버를 없앤다.
    if (!hasNextPage) return;

    // 데이터를 불러오는동안 스켈레톤컴포넌트를 보여준다.
    return isFetchingNextPage ? (
      <Skeleton />
    ) : (
      <div
        ref={ref}
        style={{ height: "100px", margin: "auto", marginTop: "50px" }}
      />
    );
  };

  return {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    Observer,
  };
};
