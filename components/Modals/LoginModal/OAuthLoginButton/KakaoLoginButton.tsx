import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import KakaoImg from "../../../../public/images/Kakao.png";
import Image from "next/image";
export default function KakaoLoginButton() {
  return (
    <OAuthLoginWrapper>
      <OAuthLogin site="kakao">
        <Image src={KakaoImg} alt="Kakao Logo Image" width={100} height={100} />
      </OAuthLogin>
      <ButtonTitle>카카오톡 로그인</ButtonTitle>
    </OAuthLoginWrapper>
  );
}
