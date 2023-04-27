import { useRouter } from "next/router";
import styled from "styled-components";
import PageTransition from "../../components/PageTransition";
export default function UserInfoPage() {
  const router = useRouter();
  return (
    <PageTransition>
      <Wrapper>
        <h1>안녕하세요!</h1>
        <h2>SideEffect 에서 사용할 닉네임과 이메일을 입력해주세요!</h2>
        <InputSection>
          <Label htmlFor="nickname">닉네임 </Label>
          <Input id="nickname" />
          <Label htmlFor="email">이메일 </Label>
          <Input id="email" />
        </InputSection>
        <Button
          onClick={() => {
            router.push("/userinfo/position");
          }}
        >
          Next
        </Button>
        <Button onClick={() => router.push("/")}>Home</Button>
      </Wrapper>
    </PageTransition>
  );
}
const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid black;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
`;

const Label = styled.label`
  text-align: start;
  font-weight: bold;
  margin-right: 15px;
`;
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;
  border-bottom: 2px solid black;
`;
const Button = styled.button`
  border: none;
  color: white;
  padding: 10px 20px;
  background-color: #5e8aff;
  border-radius: 10px;
  width: 100%;
  margin-top: 25px;
  cursor: pointer;
`;
