import Image from "next/image";
import KakaoImg from "../../../../public/images/Kakao.png";
import useLogin from "hooks/common/useLogin";
import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import { onSuccessLogin } from "apis/UserAPI";
export default function KakaoLoginButton() {
  const { Kakao } = window;
  const { handleSuccessLogin, handleFailedLogin } = useLogin("KAKAO");
  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: (res: any) => {
        onSuccessLogin(res.access_token, "kakao")
          .then((res) => {
            handleSuccessLogin(res);
          })
          .catch((error) => {
            handleFailedLogin(error);
          });
      },
      fail: (error: any) => {
        console.log(error);
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
