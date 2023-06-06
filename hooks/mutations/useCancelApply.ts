import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelApply } from "apis/ApplicantAPI";
import useToast from "../common/useToast";

export const useCancelApply = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: cancelApply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mypageData"] });
      addToast({
        type: "success",
        title: "취소 성공!",
        content: "지원을 취소하셨습니다.",
      });
    },
    onError: () => {
      addToast({
        type: "error",
        title: "취소 실패!",
        content: "정상적으로 처리되지 않았습니다.",
      });
    },
  });
  return mutate;
};
