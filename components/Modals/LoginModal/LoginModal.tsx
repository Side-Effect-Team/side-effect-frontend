import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeModal } from "@/store/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { Wrapper, Header } from "./styled";
import RegisterNickname from "./RegisterView/RegisterNickname";
import RegisterUserInfo from "./RegisterView/RegisterUserInfo";
import Login from "./Login";
import RegisterSuccess from "./RegisterView/RegisterSuccess";
const VIEW_COMPONENTS = {
  startLogin: <Login />,
  registerNickname: <RegisterNickname />,
  registerUserInfo: <RegisterUserInfo />,
  registerSuccess: <RegisterSuccess />,
};
export default function LoginModal() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.modal);
  const { modalView } = useAppSelector((state) => state.loginView);
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  const handleViewRender = () => {
    return VIEW_COMPONENTS[modalView];
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
