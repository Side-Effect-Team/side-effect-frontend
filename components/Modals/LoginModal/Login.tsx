import { media } from "@/styles/mediatest";
import styled from "styled-components";
import GoogleImg from "../../../public/images/Google.png";
import GithubImg from "../../../public/images/Github.png";
import KakaoImg from "../../../public/images/Kakao.png";
import OAuthLoginButton from "./OAuthLoginButton";
import LoginTitle from "./LoginTitle";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function Login() {
  return (
    <>
      <LoginTitle />
      <ButtonWrapper>
        <GoogleOAuthProvider clientId="809879623134-htj6fbjv3djno0dpjv75ukpjmtnt289a.apps.googleusercontent.com">
          <OAuthLoginButton
            imageSrc={GoogleImg}
            imageAlt={"google"}
            site="google"
          />

          <OAuthLoginButton
            imageSrc={GithubImg}
            imageAlt={"github"}
            site="github"
          />
          <OAuthLoginButton
            imageSrc={KakaoImg}
            imageAlt={"kakao"}
            site="kakao"
          />
        </GoogleOAuthProvider>
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
