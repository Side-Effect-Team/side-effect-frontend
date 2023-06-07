import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { closeModal } from "../../../store/modalSlice";
import { AiOutlineClose } from "react-icons/ai";
import { useFilterTab } from "@/hooks/common/useFilterTab";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { Wrapper, Title, ManageSection } from "./styled";
import customAxios from "@/apis/customAxios";
import FilterTab from "./FilterTab/index";
import PositionFilterTab from "./PositionFilterTab/index";
import ManageList from "./ManageList/index";
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
  const { isOpen, modalType } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const recruitBoardId = router.query.recruitId as string;
  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const getApplicantData = async () => {
    const response = await customAxios.get(
      `/applicant/list/${recruitBoardId}?status=${value}`,
    );
    return response.data;
  };
  const { data = { applicants: [], applicantNum: {} }, isLoading } = useQuery(
    ["ApplicantData", value],
    getApplicantData,
    {
      enabled: !!recruitBoardId,
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
  if (modalType !== "ManageTeamModal") return null;
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
