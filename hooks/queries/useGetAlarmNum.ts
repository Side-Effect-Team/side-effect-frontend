import { useQuery } from "@tanstack/react-query";
import { getAlarmNum } from "apis/NotificationAPI";

export const useGetAlarmNum = () => {
  const { data } = useQuery(["noticeNum"], getAlarmNum, {
    retry: false,
  });
  return {
    data,
  };
};
