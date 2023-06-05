import { useMutation } from "@tanstack/react-query";
import { editProfile } from "apis/UserAPI";
import useToast from "../common/useToast";

export const useEditProfile = () => {
  const { addToast, deleteToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: editProfile,
    onSuccess: () => {
      addToast({
        type: "success",
        title: "success",
        content: "프로필 편집에 성공하였습니다.",
      });
      deleteToast("unique-id");
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
