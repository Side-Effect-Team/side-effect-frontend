import styled from "styled-components";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useRouter } from "next/router";
import { closeModal } from "store/modalSlice";
import ManageTeamModal from "./ManageTeamModal/ManageTeamModal";
import LoginModal from "./LoginModal/LoginModal";
const MODAL_TYPES = {
  ManageTeamModal: "ManageTeamModal",
  LoginModal: "LoginModal",
};
const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.ManageTeamModal,
    component: <ManageTeamModal />,
  },
  {
    type: MODAL_TYPES.LoginModal,
    component: <LoginModal />,
  },
];
export default function GlobalModal() {
  const { modalType, isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const router = useRouter();

  //모달 오픈시 모달외의 부분 스크롤을 막게해준다.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  //만약 유저가 모달에서 무언가를 하다가 다른페이지로 이동하면 모달을 닫게해준다.
  useEffect(() => {
    if (isOpen) {
      dispatch(closeModal());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });
  const handleRenderModal = () => {
    return findModal?.component;
  };
  return (
    <>
      {<Overlay isOpen={isOpen} onClick={() => dispatch(closeModal())} />}
      {handleRenderModal()}
    </>
  );
}
const Overlay = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;
