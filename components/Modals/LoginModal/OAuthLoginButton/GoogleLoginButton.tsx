import { useAppDispatch } from "@/store/hooks";
import { handleModalView } from "@/store/loginViewTransitionSlice";
import { addEmail, addProviderType } from "@/store/userInfoStoreSlice";
import { useGoogleLogin } from "@react-oauth/google";
import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import { createAuthentication } from "@/store/authSlice";
import axios from "axios";
import Image from "next/image";
import GoogleImg from "../../../../public/images/Google.png";
import { closeModal } from "@/store/modalSlice";

export default function GoogleLoginButton() {
  const dispatch = useAppDispatch();

  const login = useGoogleLogin({
    onSuccess: async (res) => {
      await axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/social/login`, null, {
          headers: { token: res.access_token, ProviderType: "google" },
        })
        .then((res) => {
          console.log(res);
          localStorage.setItem("accessToken", res.headers.authorization);
          localStorage.setItem("id", res.data);

          dispatch(createAuthentication(res.headers.authorization));
          dispatch(closeModal());
        })
        .catch((err) => {
          console.log(err);
          dispatch(addProviderType("GOOGLE"));
          dispatch(addEmail(err.response.data.email));
          dispatch(
            handleModalView({
              modalView: "registerNickname",
            }),
          );
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
