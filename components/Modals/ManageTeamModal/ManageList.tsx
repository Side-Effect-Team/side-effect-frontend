import styled from "styled-components";
import ManageCard from "./ManageCard";
interface ApplicantType {
  email: string;
  nickName: string;
  applicantId: number;
  userId: number;
}
interface ManagePropsType {
  filter: string;
  projectId: string | string[] | undefined;
  applicants: ApplicantType[];
}
export default function ManageList({
  applicants,
  filter,
  projectId,
}: ManagePropsType) {
  return (
    <ManageListWrapper>
      {applicants.map(({ ...applicant }) => {
        return (
          <ManageCard
            key={applicant.userId}
            {...applicant}
            filter={filter}
            projectId={projectId}
          />
        );
      })}
    </ManageListWrapper>
  );
}
const ManageListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 20px;
  gap: 15px;
`;
