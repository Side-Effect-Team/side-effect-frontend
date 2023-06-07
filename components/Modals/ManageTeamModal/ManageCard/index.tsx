import Image from "next/image";
import profilePic from "../../../../public/images/profilePic.png";
import { handleCareerTranslate } from "@/utils/translateData";
import {
  ManageCardWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileSection,
  Nickname,
  Info,
} from "./styled";
import ButtonSection from "./ButtonSection";

export interface ApplicatnsType {
  filter: string;
  email: string;
  nickName: string;
  applicantId: number;
  userId: number;
  career: string;
  githubUrl: string;
  recruitBoardId: string | string[] | undefined;
}

export default function ManageCard({
  filter,
  recruitBoardId,
  ...applicant
}: ApplicatnsType) {
  const isApplicantManage = filter === "pending";
  const { email, nickName, applicantId, userId, career, githubUrl } = applicant;

  return (
    <ManageCardWrapper>
      <ProfileSection>
        <ProfileImage>
          <Image
            src={profilePic}
            alt="Profile Image"
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
          />
        </ProfileImage>
        <ProfileInfo>
          <Nickname>{nickName}</Nickname>
          <Info>
            <div>{email} </div>
            <div>{handleCareerTranslate(career)}</div>
          </Info>
        </ProfileInfo>
      </ProfileSection>
      <ButtonSection
        isApplicantManage={isApplicantManage}
        nickName={nickName}
        applicantId={applicantId}
        userId={userId}
        githubUrl={githubUrl}
        recruitBoardId={recruitBoardId}
      />
    </ManageCardWrapper>
  );
}
