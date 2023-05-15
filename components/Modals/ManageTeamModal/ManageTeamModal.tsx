import styled, { keyframes } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeModal } from "../../../store/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { media } from "@/styles/mediatest";
import { useFilterTab } from "@/hooks/useFilterTab";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "axios";
import FilterTab from "./FilterTab";
import PositionFilterTab from "./PositionFilterTab";
import ManageList from "./ManageList";
import WaitingImage from "./WaitingImage";
const FILTER_TAB = [
  { name: "지원현황", value: "pending" },
  { name: "팀원관리", value: "approved" },
];
const POSITION_LIST = [
  "프론트엔드",
  "백엔드",
  "디자이너",
  "데브옵스",
  "프로젝트 매니저",
  "마케터",
];

export default function ManageTeamModal() {
  const [currentTabIndex, value, handleFilterTab] = useFilterTab(0, "pending");
  const [positionTabIndex, positionValue, handlePositionFilterTab] =
    useFilterTab(0, "프론트엔드");
  const { isOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const token = "";
  const projectId = router.query.projectId;
  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const getApplicantData = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/applicant/list/${projectId}?status=${value}`,
      { headers: { Authorization: token } },
    );
    return response.data;
  };
  const { data = { applicants: [], applicantNum: {} }, isLoading } = useQuery(
    ["ApplicantData", value],
    getApplicantData,
    {
      select: (data) => {
        const applicantNum: { [key: string]: number } = {};
        for (const position in data) {
          applicantNum[position] = data[position].size;
        }
        return {
          applicants: data[positionValue].applicants,
          applicantNum,
        };
      },
    },
  );

  const { applicants, applicantNum } = data;

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
        currentTabIndex={currentTabIndex}
        handleFilterTab={handleFilterTab}
      />
      <PositionFilterTab
        positionList={POSITION_LIST}
        positionTabIndex={positionTabIndex}
        handlePositionFilterTab={handlePositionFilterTab}
        apllicantNum={applicantNum}
      />
      {!isLoading ? (
        <ManageSection>
          {applicants.length !== 0 ? (
            <ManageList
              applicants={applicants}
              filter={value}
              projectId={projectId}
            />
          ) : (
            <WaitingImage filter={value} />
          )}
        </ManageSection>
      ) : (
        <div>loading...</div>
      )}
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
  width: 775px;
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
    animation: ${({ isOpen }) => (isOpen ? slideUp : slideDown)} 0.3s ease;
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
  width: 100%;
  height: 100%;
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
