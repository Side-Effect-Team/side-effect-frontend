import { useMutation, useQueryClient } from "@tanstack/react-query";
import { handleRemoveMember } from "@/apis/ApplicantAPI";
import useToast from "../common/useToast";
export const useManageTeam = (nickName: string) => {
  const { addToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation(handleRemoveMember, {
    onSuccess: () => {
      addToast({
        type: "success",
        title: "방출완료!",
        content: `${nickName}님을 팀에서 방출하였습니다.`,
      });
      queryClient.invalidateQueries(["ApplicantData"]);
    },
    onError: () => {
      addToast({
        type: "error",
        title: "요청실패!",
        content:
          "서비스가 현재 원활하지 않습니다.불편사항은 대표이메일에 문의 부탁드립니다.",
      });
    },
  });
};
