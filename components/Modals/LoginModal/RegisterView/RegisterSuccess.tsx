import { ViewWrapper, ButtonWrapper, StyledLink } from "./styled";
import { useAppSelector } from "store/hooks";
export default function RegisterSuccess() {
  const { nickname } = useAppSelector((state) => state.userInfo.userInfo);
  return (
    <ViewWrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{nickname}님 환영합니다!</h2>
      <ButtonWrapper>
        <StyledLink href={"/recruits"}>팀 구하러 가기</StyledLink>
        <StyledLink href={"/projects"}>프로젝트 구경하러가기</StyledLink>
      </ButtonWrapper>
    </ViewWrapper>
  );
}
