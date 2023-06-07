import { useMutation, useQueryClient } from "@tanstack/react-query";
import { manageApplicant } from "@/apis/ApplicantAPI";
import useToast from "../common/useToast";

export const useManageApplicant = (nickName: string) => {
  const { addToast } = useToast();
  const queryClient = useQueryClient();
  return useMutation(manageApplicant, {
    onSuccess: () => {
      addToast({
        type: "success",
        title: "알림 전송완료!",
        content: `${nickName}님에게 결과를 전달하였습니다.`,
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
