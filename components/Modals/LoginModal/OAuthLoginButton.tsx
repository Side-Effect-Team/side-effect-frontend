import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { nextView } from "@/store/loginViewTransitionSlice";
import { addEmail } from "@/store/userInfoStoreSlice";
import { useAppDispatch } from "@/store/hooks";

interface ButtonType {
  imageSrc: any;
  imageAlt: string;
  site: string;
}

export default function OAuthLoginButton({
  imageSrc,
  imageAlt,
  site,
}: ButtonType) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  // const handleAuthLogin = async (site: string) => {
  //   // await signIn(site);
  //   // console.log(response);
  //   window.open(
  //     "https://accounts.google.com/o/oauth2/auth?" +
  //       `client_id=809879623134-htj6fbjv3djno0dpjv75ukpjmtnt289a.apps.googleusercontent.com&` +
  //       "redirect_uri=http://localhost:3000&" +
  //       "response_type=token&" +
  //       "scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
  //     "popup",
  //   );
  // };

  const login = useGoogleLogin({
    onSuccess: async (res: any) => {
      try {
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
          null,
          { headers: { token: res.access_token, ProviderType: "google" } },
        );
      } catch (err: any) {
        if (err) {
          dispatch(addEmail(err.response.data.email));
          dispatch(nextView({ viewNumber: 0 }));
        }
      }
    },
  });
  return (
    <OAuthLoginWrapper>
      <OAuthLogin site={site} onClick={() => login()}>
        <Image src={imageSrc} alt={imageAlt} width={100} height={100} />
      </OAuthLogin>

      <ButtonTitle>{site}로 로그인</ButtonTitle>
    </OAuthLoginWrapper>
  );
}
const OAuthLogin = styled.button<{ site: string }>`
  border: none;
  background: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  background-color: ${({ site }) => (site === "kakao" ? "#ffe812" : null)};
`;

const OAuthLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s all;
  }
`;
const ButtonTitle = styled.p`
  text-align: center;
  font-weight: bold;
`;
