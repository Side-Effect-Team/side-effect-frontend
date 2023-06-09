import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLikeProject } from "apis/LikeAndCommentAPI";
import useToast from "../common/useToast";

export const useAddLikeProject = () => {
  const queryClient = useQueryClient();
  const { addToast } = useToast();
  const { mutate } = useMutation({
    mutationFn: addLikeProject,
    onSuccess: (res) => {
      if (res.data.message.includes("추천했습니다")) {
        addToast({
          type: "success",
          title: "등록 성공!",
          content: "관심게시물로 등록되었습니다",
        });
      }
      queryClient.invalidateQueries({ queryKey: ["projectData"] });
      queryClient.invalidateQueries({ queryKey: ["mypageData"] });
      queryClient.invalidateQueries({ queryKey: ["topLikedProjects"] });
    },
  });
  return mutate;
};
