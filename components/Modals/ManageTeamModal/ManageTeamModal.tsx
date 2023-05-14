import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeModal } from "../../../store/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { media } from "@/styles/mediatest";
import { useFilterTab } from "@/hooks/useFilterTab";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ManageCard from "./ManageCard";
import FilterTab from "./FilterTab";
import PositionFilterTab from "./PositionFilterTab";

interface ApplicatnsType {
  userId: number;
  applicantId: number;
  nickName: string;
  email: string;
  createdAt: string;
}
const FILTER_TAB = [
  { name: "지원현황", value: "pending" },
  { name: "팀원관리", value: "approved" },
];
export default function ManageTeamModal() {
  const [currentTab, value, handleFilterTab] = useFilterTab(0, "pending");
  const [positionTab, positionValue, handlePositionFilterTab] = useFilterTab(
    0,
    "FRONTEND",
  );
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const token =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyMjIyQG5hdmVyLmNvbSIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE2ODQyMTk3NTh9.Y49A_GzdsaSoO9yoPlVim364JaoLK4m51_fPA7K_YEQ";

  const getApplicantData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/applicant/list/28?status=${value}`,
      { headers: { Authorization: token } },
    );
    return response.data;
  };

  const {
    data = { applicants: [], positions: [], apllicantNum: {} },
    isLoading,
  } = useQuery(["ApplicantData", value], getApplicantData, {
    select: (data) => {
      const apllicantNum: { [key: string]: number } = {};
      for (const position in data) {
        apllicantNum[position] = data[position].size;
      }
      return {
        applicants: data[positionValue].applicants,
        apllicantNum,
        positions: Object.keys(data).sort(),
      };
    },
  });
  const { applicants, apllicantNum, positions } = data;

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
        positionList={positions}
        positionTab={positionTab}
        handlePositionFilterTab={handlePositionFilterTab}
        apllicantNum={apllicantNum}
      />
      <ManageSection>
        <ManageList>
          {!isLoading &&
            applicants.map((applicant: ApplicatnsType) => {
              return (
                <ManageCard
                  filter={value}
                  key={applicant.userId}
                  email={applicant.email}
                  nickName={applicant.nickName}
                />
              );
            })}
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
  width: 700px;
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
