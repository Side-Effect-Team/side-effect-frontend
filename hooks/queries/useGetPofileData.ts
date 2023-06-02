import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfileData } from "apis/UserAPI";
import useToast from "../common/useToast";

export const useGetProfileData = () => {
  const { addToast, deleteToast } = useToast();
  const { data } = useQuery(["editProfile"], getProfileData, {
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
  return data;
};
