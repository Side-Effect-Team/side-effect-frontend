import Button from "components/Button";
import { Wrapper } from "./style";
import { NickName, Text } from "../Profile/Introduction/styled";
import { useDeleteAccount } from "hooks/mutations/useDeleteAccount";
import { useRouter } from "next/router";

interface AccountProps {
  email: string;
  nickname: string;
}

export default function Account({ email, nickname }: AccountProps) {
  const deleteAccountMutate = useDeleteAccount();
  const router = useRouter();

  const onClickDeleteAccount = async () => {
    const response = confirm("사이드 이펙트 계정을 삭제하시겠습니까?");
    if (!response) return;
    router.push(`/`);
    await deleteAccountMutate();
  };
  return (
    <Wrapper>
      <NickName>{nickname}님</NickName>
      <Text>email : {email}</Text>
      <Button onClick={onClickDeleteAccount}>계정 탈퇴</Button>
    </Wrapper>
  );
}
