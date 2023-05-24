import { useQuery } from "@tanstack/react-query";
import { getAlarmDataAll } from "apis/NotificationAPI";
import useToast from "@/hooks/common/useToast";

export const useGetAlarmDataAll = () => {
  const { addToast, deleteToast } = useToast();
  const { data, isLoading, isSuccess } = useQuery(
    ["noticeAll"],
    getAlarmDataAll,
    {
      onError: () => {
        addToast({
          type: "error",
          title: "error",
          content: "알람을 가져오지 못했습니다.",
        });
        deleteToast("unique-id");
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
