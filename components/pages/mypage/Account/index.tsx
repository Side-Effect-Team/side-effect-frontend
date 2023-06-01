import Button from "@/components/Button";
import { Wrapper } from "./style";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useToast from "@/hooks/common/useToast";
import { useRouter } from "next/router";
import { NickName, Text } from "../Profile/Introduction/styled";
interface AccountProps {
  email: string;
  nickname: string;
}

export const DELETE_ACCOUNT = async () => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("accessToken");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const response = await axios.delete(
    `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
    config,
  );
  return response;
};
export default function Account({ email, nickname }: AccountProps) {
  const { addToast, deleteToast } = useToast();
  const router = useRouter();

  const { mutate: deleteAccountMutate } = useMutation({
    mutationFn: DELETE_ACCOUNT,
    onSuccess: () => {
      addToast({
        type: "success",
        title: "success",
        content: "계정이 삭제되었습니다.",
      });
      deleteToast("unique-id");
      localStorage.removeItem("id");
      localStorage.removeItem("accessToken");
      router.push("/");
    },
    onError: () => {
      alert("에러");
    },
  });

  const onClickDeleteAccount = async () => {
    const response = confirm("사이드 이펙트 계정을 삭제하시겠습니까?");
    if (!response) return;
    deleteAccountMutate();
  };
  return (
    <Wrapper>
      <NickName>{nickname}님</NickName>
      <Text>email : {email}</Text>
      <Button onClick={onClickDeleteAccount}>계정 탈퇴</Button>
    </Wrapper>
  );
}
