import { NextRouter } from "next/router";
import { Wrapper } from "./styled";
import Button from "components/Button";

interface SubmitBtnBoxProps {
  router: NextRouter;
}

export default function SubmitBtnBox({ router }: SubmitBtnBoxProps) {
  const handleCancel = () => {
    if (window.confirm("작성중인 내용이 사라집니다. 계속 진행하시겠습니까?"))
      router.push("/projects");
  };

  return (
    <Wrapper>
      <Button type="submit">등록</Button>
      <Button type="button" onClick={handleCancel}>
        취소
      </Button>
    </Wrapper>
  );
}
