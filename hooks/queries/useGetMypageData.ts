import { useQuery } from "@tanstack/react-query";
import { getMypageData } from "apis/UserAPI";
import useToast from "../common/useToast";
export const useGetMypageData = () => {
  const { addToast, deleteToast } = useToast();
  const { data } = useQuery(["mypageData"], getMypageData, {
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "정보를 가져오지 못했습니다.",
      });
      deleteToast("unique-id");
    },
    retry: false,
  });
  return data?.data;
};
