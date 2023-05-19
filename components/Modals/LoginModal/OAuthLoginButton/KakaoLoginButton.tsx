import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import KakaoImg from "../../../../public/images/Kakao.png";
import Image from "next/image";

export default function KakaoLoginButton() {
  const { Kakao } = window;
  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: (res: any) => {
        console.log(res);
      },
    });
  };
  return (
    <OAuthLoginWrapper>
      <OAuthLogin site="kakao" onClick={handleKakaoLogin}>
        <Image src={KakaoImg} alt="Kakao Logo Image" width={100} height={100} />
      </OAuthLogin>
      <ButtonTitle>카카오톡 로그인</ButtonTitle>
    </OAuthLoginWrapper>
  );
}
