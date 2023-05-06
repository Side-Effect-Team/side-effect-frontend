import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeModal } from "../../../store/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { media } from "@/styles/mediatest";
import { useFilterTab } from "@/hooks/useFilterTab";
import ManageCard from "./ManageCard";
import FilterTab from "./FilterTab";
import PositionFilterTab from "./PositionFilterTab";
const FILTER_TAB = [{ name: "지원현황" }, { name: "팀원관리" }];
const POSITION_TAB = [
  { name: "프론트엔드" },
  { name: "백엔드" },
  { name: "디자이너" },
  { name: "데브옵스" },
  { name: "마케터" },
  { name: "기획자" },
];

export default function ManageTeamModal() {
  const { isOpen } = useAppSelector((state) => state.modal);
  const [currentTab, value, handleFilterTab] = useFilterTab(0, "지원현황");
  const [positionTab, positionValue, handlePositionFilterTab] = useFilterTab(
    0,
    "프론트엔드",
  );
  const dispatch = useAppDispatch();
  const handleModalClose = () => {
    dispatch(closeModal());
  };
  return (
    <Wrapper isOpen={isOpen}>
      <Title>
        <h2>프로젝트 관리</h2>
        <AiOutlineClose
          onClick={handleModalClose}
          size={30}
          style={{ cursor: "pointer" }}
        />
      </Title>
      <FilterTab
        filterList={FILTER_TAB}
        currentTab={currentTab}
        handleFilterTab={handleFilterTab}
      />
      <PositionFilterTab
        positionList={POSITION_TAB}
        positionTab={positionTab}
        handlePositionFilterTab={handlePositionFilterTab}
      />
      <ManageSection>
        <ManageList>
          <ManageCard filter={value} />
        </ManageList>
      </ManageSection>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  position: fixed;
  background-color: white;
  width: 600px;
  height: 100vh;
  right: 0;
  bottom: 0;
  z-index: 30;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  ${media.mobile} {
    height: 80%;
    width: 100%;
    font-size: small;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 25px;
    animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.3s
      ease-in-out;
  }
`;
const Title = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
  padding: 20px;
`;
const ManageSection = styled.section`
  overflow: auto;
`;
const ManageList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 20px;
  gap: 15px;
`;
const slideIn = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0%);
  }
`;
const slideOut = keyframes`
  0%{
    transform: translateX(0%);
  }
  100%{
    transform: translateX(100%);
  }
`;
const slideUp = keyframes`
  0%{
    transform: translateY(100%);
  }
  100%{
    transform: translateY(0%);
  }
`;
const slideDown = keyframes`
  0%{
    transform: translateY(0%);
  }
  100%{
    transform: translateY(100%);
  }
`;
