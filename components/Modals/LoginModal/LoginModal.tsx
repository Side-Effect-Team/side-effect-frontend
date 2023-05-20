import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { media } from "@/styles/mediatest";
import { closeModal } from "@/store/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import RegisterNickname from "./RegisterView/RegisterNickname";
import RegisterUserInfo from "./RegisterView/RegisterUserInfo";
import Login from "./Login";
import RegisterSuccess from "./RegisterView/RegisterSuccess";
export default function LoginModal() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  const { modalView } = useAppSelector((state) => state.loginView);
  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const viewComponentsTest = {
    startLogin: <Login />,
    registerNickname: <RegisterNickname />,
    registerUserInfo: <RegisterUserInfo />,
    registerSuccess: <RegisterSuccess />,
  };
  const handleViewRender = () => {
    return viewComponentsTest[modalView];
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
      {handleViewRender()}
    </Wrapper>
  );
}
const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => isOpen && zoomIn} 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 550px;
  width: 550px;
  background-color: white;
  z-index: 30;
  border-radius: 15px;
  ${media.mobile} {
    width: 100%;
    height: 100%;
    border-radius: 0;
    align-items: center;
  }
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  position: absolute;
  top: 0;
`;

const zoomIn = keyframes`
  0%{
    transform: scale(0);
  }
  100%{
    transform: scale(1);
  }
`;
