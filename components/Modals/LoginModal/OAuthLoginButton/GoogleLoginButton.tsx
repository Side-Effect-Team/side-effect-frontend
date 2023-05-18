import { useAppDispatch } from "@/store/hooks";
import { nextView } from "@/store/loginViewTransitionSlice";
import { addEmail } from "@/store/userInfoStoreSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import { createAuthentication } from "@/store/authSlice";
import axios from "axios";
import Image from "next/image";
import GoogleImg from "../../../../public/images/Google.png";

export default function GoogleLoginButton() {
  const dispatch = useAppDispatch();

  const login = useGoogleLogin({
    onSuccess: async (res: any) => {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, null, {
          headers: { token: res.access_token, ProviderType: "google" },
        })
        .then((res) => {
          dispatch(createAuthentication(res.headers.authorization));
          console.log(res.headers.authorization);
        })
        .catch((err) => {
          dispatch(addEmail(err.response.data.email));
          dispatch(nextView({ viewNumber: 0 }));
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