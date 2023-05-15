import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { signIn } from "next-auth/react";

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
  return (
    <OAuthLoginWrapper>
      <OAuthLogin site={site} onClick={() => signIn(site)}>
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
