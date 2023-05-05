import styled from "styled-components";
import { useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import ManageTeamModal from "./ManageTeamModal";

const MODAL_TYPES = {
  ManageTeamModal: "ManageTeamModal",
};
const MODAL_COMPONENTS = [
  {
    type: MODAL_TYPES.ManageTeamModal,
    component: <ManageTeamModal />,
  },
];
export default function GlobalModal() {
  const { modalType, isOpen } = useAppSelector((state) => state.modal);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);
  const findModal = MODAL_COMPONENTS.find((modal) => {
    return modal.type === modalType;
  });
  const handleRenderModal = () => {
    return findModal?.component;
  };
  return (
    <>
      {<Overlay isOpen={isOpen} />}
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
