import Button from "@/components/Button";
import { motion } from "framer-motion";
import { ViewWrapper, ButtonWrapper } from "./styled";
export default function RegisterSuccess() {
  return (
    <ViewWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>환영합니다!</h2>
      <ButtonWrapper>
        <Button size="large">팀 구하러가기</Button>
        <Button size="large">프로젝트 구경하러가기</Button>
      </ButtonWrapper>
    </ViewWrapper>
  );
}
