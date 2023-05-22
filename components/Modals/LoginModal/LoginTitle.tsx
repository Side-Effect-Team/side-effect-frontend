import styled from "styled-components";
import { media } from "@/styles/mediatest";
export default function LoginTitle() {
  return (
    <Title>
      <LogoWrapper>
        <TempLogo>logo</TempLogo>
      </LogoWrapper>
      <MainTitle>사이드 이펙트에 오신것을 환영합니다!</MainTitle>
      <SubTitle>소셜계정으로 로그인을 진행해주세요!</SubTitle>
    </Title>
  );
}
const Title = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
const MainTitle = styled.div`
  font-size: xx-large;
  font-weight: bolder;
  ${media.mobile} {
    font-size: large;
  }
`;
const SubTitle = styled.div`
  font-size: large;
  font-weight: bolder;
  ${media.mobile} {
    font-size: small;
  }
`;
const LogoWrapper = styled.div``;
const TempLogo = styled.div``;
