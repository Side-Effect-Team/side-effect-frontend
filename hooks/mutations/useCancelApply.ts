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
        title: "success",
        content: "지원을 취소하셨습니다.",
      });
    },
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "정상적으로 처리되지 않았습니다.",
      });
    },
  });
  return mutate;
};
