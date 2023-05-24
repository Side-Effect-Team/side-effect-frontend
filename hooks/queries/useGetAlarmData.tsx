import { useInfiniteQuery } from "@tanstack/react-query";
import { getAlarmData } from "apis/NotificationAPI";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useGetAlarmData = () => {
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isLoading,
    isSuccess,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["notice"],
    ({ pageParam = -1 }) => getAlarmData(pageParam),
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
    return hasNextPage ? <div ref={ref} style={{ height: "50px" }} /> : null;
  };

  return {
    data: data?.pages,
    hasNextPage,
    fetchNextPage,
    Observer,
    isLoading,
  };
};
