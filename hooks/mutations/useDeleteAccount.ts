import { deleteAccount } from "@/apis/UserAPI";
import { useMutation } from "@tanstack/react-query";
import useToast from "../common/useToast";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/store/hooks";
import { removeAuthentication } from "@/store/authSlice";

export const useDeleteAccount = () => {
  const { addToast, deleteToast } = useToast();
  const dispatch = useAppDispatch();

  const { mutate } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      addToast({
        type: "success",
        title: "success",
        content: "계정이 삭제되었습니다.",
      });
      deleteToast("unique-id");
      dispatch(removeAuthentication());
    },
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "회원탈퇴 실패.",
      });
    },
  });
  return mutate;
};
