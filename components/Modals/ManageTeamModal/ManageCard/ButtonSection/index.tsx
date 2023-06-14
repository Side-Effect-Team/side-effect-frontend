import Image from "next/image";
import GithubImg from "../../../../../public/images/Github.png";

import Button from "components/Button";
import { useManageApplicant } from "hooks/mutations/useManageApplicant";
import { useManageTeam } from "hooks/mutations/useManageTeam";
import { ApplicatnsType } from "../index";
import { useRouter } from "next/router";
import { ButtonSectionWrapper } from "./styled";
type Type = Pick<
  ApplicatnsType,
  "applicantId" | "githubUrl" | "userId" | "nickName"
>;
interface ManageType extends Type {
  isApplicantManage: boolean;
}
export default function ButtonSection({
  githubUrl,
  isApplicantManage,
  nickName,
  applicantId,
  userId,
}: ManageType) {
  const { mutate: manageApplicant } = useManageApplicant(nickName);
  const { mutate: removeMember } = useManageTeam(nickName);
  const router = useRouter();
  const recruitBoardId = router.query.recruitId as string;
  const handleMoveProfile = (userId: number) => {
    window.open(`/mypage/${userId}`, "_blank");
  };
  const handleRemoveMember = () => {
    if (confirm(`${nickName}님을 정말 내보내시겠습니까?`)) {
      removeMember({ recruitBoardId, applicantId });
    }
    return;
  };
  const handleManageApplicant = (status: "approved" | "rejected") => {
    const result = status === "approved" ? "수락" : "거절";
    if (confirm(`${nickName}님을 ${result}하시겠습니까?`)) {
      manageApplicant({
        recruitBoardId,
        applicantId,
        status,
      });
    }
    return;
  };

  if (!isApplicantManage) {
    return (
      <ButtonSectionWrapper>
        <Button onClick={() => handleMoveProfile(userId)}>프로필</Button>
        <Button color="coral" onClick={handleRemoveMember}>
          내보내기
        </Button>
      </ButtonSectionWrapper>
    );
  }
  return (
    <ButtonSectionWrapper>
      {githubUrl && (
        <Button
          color="darkGray"
          onClick={() => window.open(githubUrl, "_blank")}
        >
          <Image
            src={GithubImg}
            alt="지원자 깃허브 주소"
            width={25}
            height={25}
          />
        </Button>
      )}
      <Button onClick={() => handleManageApplicant("approved")}>수락</Button>
      <Button color="coral" onClick={() => handleManageApplicant("rejected")}>
        거절
      </Button>
      <Button onClick={() => handleMoveProfile(userId)}>프로필</Button>
    </ButtonSectionWrapper>
  );
}
