// import AlarmSkeleton from "@/components/Alarm/skeleton";
import AlarmSkeleton from "@/components/Skeleton/AlarmSkeleton";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAlarmData } from "apis/NotificationAPI";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useGetAlarmData = () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ["notice"],
    ({ pageParam = -1 }) => getAlarmData(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.notificationResponses.length === 0
          ? undefined
          : lastPage.lastId;
      },
    },
  );

  console.log(hasNextPage);
  const Observer = () => {
    const [ref, inView] = useInView({ threshold: 1 });
    useEffect(() => {
      if (!data) return;
      if (hasNextPage && inView) fetchNextPage();
    }, [inView]);
    return hasNextPage ? (
      <div ref={ref}>
        <AlarmSkeleton />
        <AlarmSkeleton />
      </div>
    ) : (
      <></>
    );
  };

  return {
    data: data?.pages,
    hasNextPage,
    fetchNextPage,
    Observer,
  };
};
