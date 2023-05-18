import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import axios from "axios";
import GithubImg from "../../../../public/images/Github.png";
import Image from "next/image";
export default function GithubLoginButton() {
  const handleGithubLogin = () => {
    window.location.replace(
      `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`,
    );
  };
  return (
    <OAuthLoginWrapper>
      <OAuthLogin onClick={handleGithubLogin}>
        <Image
          src={GithubImg}
          alt="Github Logo Image"
          width={100}
          height={100}
        />
      </OAuthLogin>
      <ButtonTitle>깃허브 로그인</ButtonTitle>
    </OAuthLoginWrapper>
  );
}
