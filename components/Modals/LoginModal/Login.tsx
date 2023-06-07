import { ButtonWrapper } from "./styled";
import LoginTitle from "./LoginTitle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./OAuthLoginButton/GoogleLoginButton";
import KakaoLoginButton from "./OAuthLoginButton/KakaoLoginButton";

// import NaverLoginButton from "./OAuthLoginButton/NaverLoginButton";
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
