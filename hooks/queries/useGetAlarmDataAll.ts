import { useQuery } from "@tanstack/react-query";
import { getAlarmDataAll } from "apis/NotificationAPI";
import useToast from "hooks/common/useToast";

export const useGetAlarmDataAll = () => {
  const { addToast } = useToast();
  const { data, isLoading, isSuccess } = useQuery(
    ["noticeAll"],
    getAlarmDataAll,
    {
      onError: () => {
        addToast({
          type: "error",
          title: "에러 발생!",
          content: "알람을 가져오지 못했습니다.",
        });
      },
      retry: false,
    },
  );
  return {
    data,
    isLoading,
    isSuccess,
  };
};
