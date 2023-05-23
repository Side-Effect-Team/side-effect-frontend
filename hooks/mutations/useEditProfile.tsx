import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProfile } from "apis/MypageApi";
import useToast from "../common/useToast";
import { useRouter } from "next/router";

export const useEditProfile = () => {
  const router = useRouter();
  const { addToast, deleteToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["editProfile"] });
      addToast({
        type: "success",
        title: "success",
        content: "프로필 편집에 성공하였습니다..",
      });
      deleteToast("unique-id");
      router.push("/mypage");
    },
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "프로필 편집에 실패하였습니다.",
      });

      deleteToast("unique-id");
    },
  });
  return mutate;
};
