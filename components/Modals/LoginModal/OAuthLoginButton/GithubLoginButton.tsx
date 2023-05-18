import { OAuthLogin, OAuthLoginWrapper, ButtonTitle } from "./styled";
import GithubImg from "../../../../public/images/Github.png";
import Image from "next/image";
export default function GithubLoginButton() {
  return (
    <OAuthLoginWrapper>
      <OAuthLogin>
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
