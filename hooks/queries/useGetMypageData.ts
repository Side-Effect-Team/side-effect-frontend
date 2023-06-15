import { useQuery } from "@tanstack/react-query";
import { getMypageData } from "apis/UserAPI";
import useToast from "../common/useToast";
export const useGetMypageData = () => {
  const { addToast } = useToast();
  const { data } = useQuery(["mypageData"], getMypageData, {
    onError: () => {
      addToast({
        type: "error",
        title: "에러 발생!",
        content: "정보를 가져오지 못했습니다.",
      });
    },
    retry: false,
  });
  return data?.data;
};
