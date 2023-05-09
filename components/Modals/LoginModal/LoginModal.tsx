import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { media } from "@/styles/mediatest";
import { useSession, signIn, signOut } from "next-auth/react";
export default function LoginModal() {
  const router = useRouter();
  const { isOpen } = useAppSelector((state) => state.modal);
  const { data: session }: any = useSession();
  console.log(session);
  return (
    <Wrapper isOpen={isOpen}>
      <button onClick={() => signIn("github")}>깃허브</button>
      <button onClick={() => signIn("kakao")}>카카오</button>
      <button onClick={() => signIn("google")}>구글</button>

      <button onClick={() => signOut()}>로그아웃</button>
    </Wrapper>
  );
}
const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  width: 40%;
  background-color: white;
  z-index: 30;
  border-radius: 15px;
  ${media.mobile} {
    width: 80%;
  }
`;
