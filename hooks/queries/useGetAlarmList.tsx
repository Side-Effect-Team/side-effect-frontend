import { useQuery } from "@tanstack/react-query";
import { getAlarmList } from "apis/AlarmApi";
import useToast from "@/hooks/common/useToast";

export const useGetAlarmList = () => {
  const { addToast, deleteToast } = useToast();
  const { data, isLoading, isSuccess } = useQuery(["notice"], getAlarmList, {
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "알람을 가져오지 못했습니다.",
      });
      deleteToast("unique-id");
    },
    retry: false,
  });
  return {
    data,
    isLoading,
    isSuccess,
  };
};
