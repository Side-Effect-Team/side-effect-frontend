import ManageCard from "../ManageCard/index";
import { ManageListWrapper } from "./styled";
interface ApplicantType {
  email: string;
  nickName: string;
  applicantId: number;
  userId: number;
  career: string;
  githubUrl: string;
}
interface ManagePropsType {
  filter: string;
  recruitBoardId: string | string[] | undefined;
  applicants: ApplicantType[];
}
export default function ManageList({
  applicants,
  filter,
  recruitBoardId,
}: ManagePropsType) {
  return (
    <ManageListWrapper>
      {applicants.map(({ ...applicant }) => {
        return (
          <ManageCard
            key={applicant.userId}
            {...applicant}
            filter={filter}
            recruitBoardId={recruitBoardId}
          />
        );
      })}
    </ManageListWrapper>
  );
}
