import { useInfiniteQuery } from "@tanstack/react-query";
import { getProjectData } from "apis/ProjectAPI";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

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
    return hasNextPage ? (
      <div
        ref={ref}
        style={{ height: "100px", margin: "auto", marginTop: "50px" }}
      />
    ) : null;
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
