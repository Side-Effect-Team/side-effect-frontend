import { Title, LogoWrapper, TempLogo, MainTitle, SubTitle } from "./styled";
import HandShakeImg from "../../../public/images/handShake.png";
import Image from "next/image";
export default function LoginTitle() {
  return (
    <Title>
      <LogoWrapper>
        <TempLogo>
          <Image
            src={HandShakeImg}
            alt="사이드이펙트에 오신걸 환영합니다."
            width={250}
            height={250}
          />
        </TempLogo>
      </LogoWrapper>
      <MainTitle>사이드 이펙트에 오신것을 환영합니다!</MainTitle>
      <SubTitle>소셜계정으로 로그인을 진행해주세요!</SubTitle>
    </Title>
  );
}
