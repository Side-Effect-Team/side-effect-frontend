import Image from "next/image";
import DefaultImg from "../../../../public/images/mypageDefaultImage.png";
import { handleCareerTranslate } from "utils/translateData";
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
  imgUrl: string;
}

export default function ManageCard({ filter, ...applicant }: ApplicatnsType) {
  const isApplicantManage = filter === "pending";
  const { email, nickName, applicantId, userId, career, githubUrl, imgUrl } =
    applicant;
  return (
    <ManageCardWrapper>
      <ProfileSection>
        <ProfileImage>
          <Image
            src={
              imgUrl
                ? `${process.env.NEXT_PUBLIC_API_URL}/user/image/${imgUrl}`
                : DefaultImg
            }
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
      />
    </ManageCardWrapper>
  );
}
