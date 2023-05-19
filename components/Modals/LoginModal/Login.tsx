import { media } from "@/styles/mediatest";
import styled from "styled-components";
import LoginTitle from "./LoginTitle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./OAuthLoginButton/GoogleLoginButton";
import KakaoLoginButton from "./OAuthLoginButton/KakaoLoginButton";
import NaverLoginButton from "./OAuthLoginButton/NaverLoginButton";
export default function Login() {
  return (
    <>
      <LoginTitle />
      <ButtonWrapper>
        <GoogleOAuthProvider
          clientId={`${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}`}
        >
          <GoogleLoginButton />
        </GoogleOAuthProvider>
        <KakaoLoginButton />
        {/* <NaverLoginButton /> */}
      </ButtonWrapper>
    </>
  );
}

const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding: 30px;
  ${media.mobile} {
    flex-direction: column;

    margin-top: 0 auto;
    width: 80%;
    gap: 0;
  }
`;
