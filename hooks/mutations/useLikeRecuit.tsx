import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLikeRecruit } from "apis/LikeBoardApi";
import useToast from "../common/useToast";

export const useLikeRecruit = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();
  const { mutate } = useMutation({
    mutationFn: addLikeRecruit,
    onSuccess: (res) => {
      if (res.data.message.includes("추천했습니다")) {
        addToast({
          type: "success",
          title: "success",
          content: "관심게시물로 등록되었습니다",
        });
      }
      queryClient.invalidateQueries({ queryKey: ["recruits"] });
      queryClient.invalidateQueries({ queryKey: ["mypageData"] });
    },
  });
  return mutate;
};
