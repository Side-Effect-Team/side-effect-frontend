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
    onError: (error) => {
      console.log("error", error);
      addToast({
        type: "error",
        title: "요청실패!",
        content: `${error}`,
      });
    },
  });
};
