import { useMutation } from "@tanstack/react-query";
import { editProfile } from "apis/UserAPI";
import useToast from "../common/useToast";

export const useEditProfile = () => {
  const { addToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      addToast({
        type: "success",
        title: "편집 성공!",
        content: "프로필 편집에 성공하였습니다.",
      });
    },
    onError: () => {
      addToast({
        type: "error",
        title: "편집 실패!",
        content: "프로필 편집에 실패하였습니다.",
      });
    },
  });
  return mutate;
};
