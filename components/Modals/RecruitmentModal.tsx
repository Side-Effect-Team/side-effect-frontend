import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState, useRef } from "react";
import { mediaQuery } from "../../styles/Media";
import { closeModal } from "../../store/modalSlice";
import { theme } from "../../styles/Theme";
import useOutsideClick from "../../hooks/useOutsideClick";

const FILTER_TAB = [{ name: "지원현황" }, { name: "팀원관리" }];
const POSITION_TAB = [
  { name: "프론트엔드" },
  { name: "백엔드" },
  { name: "디자이너" },
  { name: "마케터" },
];
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
export default function RecruitmentModal() {
  const [currentTab, setCurrentTab] = useState(0);
  const [filter, setFilter] = useState("지원현황");
  const [positionTab, setPositionTab] = useState(0);
  const [positionFilter, setPositionFilter] = useState("프론트엔드");
  const { isOpen } = useAppSelector((state) => state.modal);
  const modalRef = useRef(null);
  const dispatch = useAppDispatch();
  console.log(isOpen);
  const handleFilterTab = (index: number, name: string) => {
    setCurrentTab(index);
    setFilter(name);
  };
  const handlePositionFilterTab = (index: number, name: string) => {
    setPositionTab(index);
    setPositionFilter(name);
  };
  const handleModalClose = () => {
    dispatch(closeModal());
  };

  useOutsideClick(modalRef, handleModalClose);
  return (
    <Wrapper isOpen={isOpen} ref={modalRef}>
      <Title>
        <h2>Modal</h2>
        <button onClick={handleModalClose}>x</button>
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
      {filter === "지원현황" ? <div>지원현황</div> : <div>팀원관리</div>}
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
  width: 500px;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 30;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  ${mediaQuery("mobile")`
    width:100%;
  `}
`;
const Title = styled.header`
  display: flex;
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
  gap: 10px;
  margin: 0;
  padding: 10px 20px;
`;
const Position = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px;
  cursor: pointer;
  &.focused {
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

const ApplicantSection = styled.section``;

const ApplicantFilter = styled.nav``;

const ApplicantList = styled.ul`
  padding: 30px;
`;
const Applicant = styled.li``;
