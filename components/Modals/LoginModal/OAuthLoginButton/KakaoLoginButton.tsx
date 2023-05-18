import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import KakaoImg from "../../../../public/images/Kakao.png";
import Image from "next/image";
export default function KakaoLoginButton() {
  const handleKakaoLogin = () => {
    window.open(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=http://localhost:3000/`,
    );
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
