import Image from "next/image";
import GoogleImg from "../../../../public/images/Google.png";
import useLogin from "@/hooks/common/useLogin";
import { useGoogleLogin } from "@react-oauth/google";
import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import { onSuccessLogin } from "apis/UserAPI";

export default function GoogleLoginButton() {
  const { handleSuccessLogin, handleFailedLogin } = useLogin("GOOGLE");
  const login = useGoogleLogin({
    onSuccess: async (res) => {
      onSuccessLogin(res.access_token, "google")
        .then((res) => {
          handleSuccessLogin(res);
        })
        .catch((error) => {
          handleFailedLogin(error);
        });
    },
  });
  return (
    <OAuthLoginWrapper>
      <OAuthLogin onClick={() => login()}>
        <Image
          src={GoogleImg}
          alt="Google Logo Image"
          width={100}
          height={100}
        />
      </OAuthLogin>
      <ButtonTitle>구글 로그인</ButtonTitle>
    </OAuthLoginWrapper>
  );
}
