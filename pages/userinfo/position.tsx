import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import PageTransition from "../../components/pages/UserInfoPage/PageTransition";
import SelectBox from "../../components/SelectBox";

const SELECT_OPTIONS = [
  "프론트엔드",
  "백엔드",
  "디자이너",
  "데브옵스",
  "기획자",
  "마케터",
];
export default function Position() {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <PageTransition>
      <Wrapper>
        <h1>포지션을 선택해주세요.</h1>
        <SelectBox
          options={SELECT_OPTIONS}
          setValue={setValue}
          value={value}
          title="포지션"
        />
        <h2>알림을 받을 이메일을 입력해주세요.</h2>
        <span>dd</span>
        <Input />
        <Button onClick={() => router.push("/userinfo/image")}>Next</Button>
        <Button onClick={() => router.back()}>Back</Button>
      </Wrapper>
    </PageTransition>
  );
}
const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
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
