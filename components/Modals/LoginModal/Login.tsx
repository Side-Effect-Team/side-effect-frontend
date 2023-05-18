import { media } from "@/styles/mediatest";
import styled from "styled-components";
import LoginTitle from "./LoginTitle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./OAuthLoginButton/GoogleLoginButton";
import KakaoLoginButton from "./OAuthLoginButton/KakaoLoginButton";
import GithubLoginButton from "./OAuthLoginButton/GithubLoginButton";
export default function Login() {
  return (
    <>
      <LoginTitle />
      <ButtonWrapper>
        <GoogleOAuthProvider clientId="809879623134-htj6fbjv3djno0dpjv75ukpjmtnt289a.apps.googleusercontent.com">
          <GoogleLoginButton />
        </GoogleOAuthProvider>
        <KakaoLoginButton />
        <GithubLoginButton />
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
