import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState, useRef } from "react";
import { mediaQuery } from "../../styles/Media";
import { closeModal } from "../../store/modalSlice";
import { theme } from "../../styles/Theme";
import { AiOutlineClose } from "react-icons/ai";
import useOutsideClick from "../../hooks/useOutsideClick";
import ManageCard from "./ManageCard";
import { media } from "@/styles/mediatest";
import { useFilterTab } from "@/hooks/useFilterTab";
const FILTER_TAB = [{ name: "지원현황" }, { name: "팀원관리" }];
const POSITION_TAB = [
  { name: "프론트엔드" },
  { name: "백엔드" },
  { name: "디자이너" },
  { name: "데브옵스" },
  { name: "마케터" },
  { name: "기획자" },
];

export default function RecruitmentModal() {
  const { isOpen } = useAppSelector((state) => state.modal);
  const [currentTab, filter, handleFilterTab] = useFilterTab(0, "지원현황");
  const [positionTab, positionFilter, handlePositionFilterTab] = useFilterTab(
    0,
    "프론트엔드",
  );
  console.log(positionFilter);
  const modalRef = useRef(null);
  const dispatch = useAppDispatch();

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  useOutsideClick(modalRef, handleModalClose);
  return (
    <Wrapper isOpen={isOpen} ref={modalRef}>
      <Title>
        <h2>Modal</h2>
        <AiOutlineClose
          onClick={handleModalClose}
          size={30}
          style={{ cursor: "pointer" }}
        />
      </Title>
      <FilterTab>
        {FILTER_TAB.map((tab, index) => {
          return (
            <Filter
              className={index === currentTab ? "focused" : ""}
              key={tab.name}
              onClick={() => handleFilterTab(index, tab.name)}
            >
              {tab.name}
            </Filter>
          );
        })}
      </FilterTab>
      <PositionFilterTab>
        {POSITION_TAB.map((position, index) => {
          return (
            <Position
              className={index === positionTab ? "focused" : ""}
              key={position.name}
              onClick={() => handlePositionFilterTab(index, position.name)}
            >
              {position.name}
              <NumberOfPosition>1</NumberOfPosition>
            </Position>
          );
        })}
      </PositionFilterTab>
      <ManageSection>
        <ManageList>
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
          <ManageCard filter={filter} />
        </ManageList>
      </ManageSection>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s ease-in-out;
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
  /* ${mediaQuery("mobile")`
    width:100%;
  `} */
  ${media.mobile} {
    height: 90%;
    width: 100%;
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
  padding: 30px;
`;
const FilterTab = styled.ul`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid black;
  margin: 0;
  padding: 10px 20px;
`;
const Filter = styled.li`
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 500;
  &.focused {
    color: white;
    background-color: ${theme.brandColor.primary};
  }
`;
const PositionFilterTab = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
  padding: 20px;
  overflow: auto;
  overflow-y: hidden;
`;
const Position = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  min-width: fit-content;
  cursor: pointer;
  &.focused {
    font-weight: bold;
    color: ${theme.brandColor.primary};
    border-bottom: 3px solid ${theme.brandColor.primary};
  }
`;
const NumberOfPosition = styled.div`
  border-radius: 5px;
  padding: 5px 10px;
  color: black;
  background-color: ${theme.brandColor.lightGray};
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
