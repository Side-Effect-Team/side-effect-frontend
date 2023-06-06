import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { Wrapper, Header } from "./styled";
import RegisterNickname from "./RegisterView/RegisterNickname";
import RegisterUserInfo from "./RegisterView/RegisterUserInfo";
import Login from "./Login";
import RegisterSuccess from "./RegisterView/RegisterSuccess";
import { AnimatePresence } from "framer-motion";
import { handleModalView } from "@/store/loginViewTransitionSlice";
const VIEW_COMPONENTS = {
  startLogin: <Login />,
  registerNickname: <RegisterNickname />,
  registerUserInfo: <RegisterUserInfo />,
  registerSuccess: <RegisterSuccess />,
};
export default function LoginModal() {
  const dispatch = useAppDispatch();
  const { isOpen, modalType } = useAppSelector((state) => state.modal);
  const { modalView } = useAppSelector((state) => state.loginView);
  const { token } = useAppSelector((state) => state.auth);
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  const handleViewRender = () => {
    return VIEW_COMPONENTS[modalView];
  };
  // 모달들을 isOpen 하나의 상태로 열고닫기를 관리하기때문에 만약 두개 세개의 모달이 한페이지에 있다면 어떤모달을 열었는지 판단해주는코드.
  if (modalType !== "LoginModal") return null;

  //토큰이없다면 즉 로그인상태가 아니라면 로그인모달을 열었을시 로그인 첫단계부터 시작.
  if (!token) {
    dispatch(handleModalView({ modalView: "startLogin" }));
  }
  return (
    <Wrapper isOpen={isOpen}>
      <Header>
        <AiOutlineClose
          onClick={handleModalClose}
          size={40}
          style={{ cursor: "pointer" }}
        />
      </Header>
      <AnimatePresence mode="wait" initial={false}>
        {handleViewRender()}
      </AnimatePresence>
    </Wrapper>
  );
}
