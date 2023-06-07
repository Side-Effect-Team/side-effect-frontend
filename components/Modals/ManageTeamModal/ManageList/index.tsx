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
  applicants: ApplicantType[];
}
export default function ManageList({ applicants, filter }: ManagePropsType) {
  return (
    <ManageListWrapper>
      {applicants.map(({ ...applicant }) => {
        return (
          <ManageCard key={applicant.userId} {...applicant} filter={filter} />
        );
      })}
    </ManageListWrapper>
  );
}
