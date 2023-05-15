import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { media } from "@/styles/mediatest";
import { closeModal } from "@/store/modalSlice";
import { useSession } from "next-auth/react";
import { AiOutlineClose } from "react-icons/ai";
import GoogleImg from "../../../public/images/Google.png";
import GithubImg from "../../../public/images/Github.png";
import KakaoImg from "../../../public/images/Kakao.png";
import OAuthLoginButton from "./OAuthLoginButton";
import LoginTitle from "./LoginTitle";
export default function LoginModal() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  const { data: session }: any = useSession();
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <AiOutlineClose
          onClick={handleModalClose}
          size={30}
          style={{ cursor: "pointer" }}
        />
      </Header>
      <LoginTitle />
      <ButtonWrapper>
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
        <OAuthLoginButton imageSrc={KakaoImg} imageAlt={"kakao"} site="kakao" />
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => isOpen && zoomIn} 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 500px;
  width: 550px;
  background-color: white;
  z-index: 30;
  border-radius: 15px;
  ${media.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding: 30px;
  ${media.mobile} {
    flex-direction: column;
    margin-top: auto;
    width: 80%;
    gap: 0;
  }
`;
const zoomIn = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;
