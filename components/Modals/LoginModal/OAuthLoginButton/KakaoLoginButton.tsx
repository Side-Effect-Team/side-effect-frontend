import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import { useAppDispatch } from "@/store/hooks";
import { handleModalView } from "@/store/loginViewTransitionSlice";
import { addEmail, addProviderType } from "@/store/userInfoStoreSlice";
import useToast from "@/hooks/common/useToast";
import axios from "axios";
import KakaoImg from "../../../../public/images/Kakao.png";
import Image from "next/image";
import { createAuthentication } from "@/store/authSlice";
import { closeModal } from "@/store/modalSlice";

export default function KakaoLoginButton() {
  const { Kakao } = window;
  const dispatch = useAppDispatch();
  const { addToast } = useToast();
  const handleKakaoLogin = () => {
    Kakao.Auth.login({
      success: (res: any) => {
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/social/login`, null, {
            headers: {
              token: res.access_token,
              ProviderType: "kakao",
            },
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("accessToken", res.headers.authorization);
            localStorage.setItem("id", res.data.userId);

            dispatch(createAuthentication(res.headers.authorization));
            dispatch(closeModal());
          })
          .catch((error) => {
            if (error.response.status === 400) {
              dispatch(addProviderType("KAKAO"));
              dispatch(addEmail(error.response.data.email));
              dispatch(handleModalView({ modalView: "registerNickname" }));
            } else {
              addToast({
                type: "error",
                title: "로그인 실패",
                content:
                  "서버가 원활하지 않습니다. 고객센터로 문의 부탁드립니다.",
              });
            }
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
