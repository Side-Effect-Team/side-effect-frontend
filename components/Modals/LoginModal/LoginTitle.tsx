import { Title, LogoWrapper, TempLogo, MainTitle, SubTitle } from "./styled";
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
