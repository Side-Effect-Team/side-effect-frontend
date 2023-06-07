import Image from "next/image";
import profilePic from "../../../../public/images/profilePic.png";
import GithubImg from "../../../../public/images/Github.png";
import Button from "@/components/Button";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { handleCareerTranslate } from "@/utils/translateData";
import {
  ManageCardWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileSection,
  ButtonSection,
  Nickname,
  Info,
} from "./styled";
import axios from "axios";
import useToast from "@/hooks/common/useToast";
import {
  manageApplicant,
  handleRemoveMember,
} from "../../../../apis/ApplicantAPI";
interface ApplicatnsType {
  filter: string;
  email: string;
  nickName: string;
  applicantId: number;
  userId: number;
  career: string;
  githubUrl: string;
  projectId: string | string[] | undefined;
}

export default function ManageCard({
  filter,
  projectId,
  ...applicant
}: ApplicatnsType) {
  const isApplicantManage = filter === "pending";
  const router = useRouter();
  const { email, nickName, applicantId, userId, career, githubUrl } = applicant;
  const { addToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: removeMember } = useMutation(handleRemoveMember, {
    onSuccess: () => {
      addToast({
        type: "success",
        title: "방출완료!",
        content: `${nickName}님을 팀에서 방출하였습니다.`,
      });
      queryClient.invalidateQueries(["ApplicantData"]);
    },
    onError: () => {
      addToast({
        type: "error",
        title: "요청실패!",
        content:
          "서비스가 현재 원활하지 않습니다.불편사항은 대표이메일에 문의 부탁드립니다.",
      });
    },
  });
  const { mutate } = useMutation(manageApplicant, {
    onSuccess: () => {
      addToast({
        type: "success",
        title: "알림 전송완료!",
        content: `${nickName}님에게 결과를 전달하였습니다.`,
      });
      queryClient.invalidateQueries(["ApplicantData"]);
    },
    onError: () => {
      addToast({
        type: "error",
        title: "요청실패!",
        content:
          "서비스가 현재 원활하지 않습니다.불편사항은 대표이메일에 문의 부탁드립니다.",
      });
    },
  });
  const handleManageButton = () => {
    if (isApplicantManage) {
      return (
        <>
          {githubUrl && (
            <Button onClick={() => window.open(githubUrl, "_blank")}>
              <Image
                src={GithubImg}
                alt="지원자 깃허브 주소"
                width={25}
                height={25}
              />
            </Button>
          )}
          <Button
            onClick={() =>
              mutate({
                recruitBoardId: projectId,
                applicantId: applicantId,
                status: "approved",
              })
            }
          >
            수락
          </Button>
          <Button
            onClick={() =>
              mutate({
                recruitBoardId: projectId,
                applicantId: applicantId,
                status: "rejected",
              })
            }
          >
            거절
          </Button>
          <Button onClick={() => router.push(`/mypage/${userId}`)}>
            프로필
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            onClick={() =>
              removeMember({ recruitBoardId: projectId, applicantId })
            }
          >
            추방
          </Button>
        </>
      );
    }
  };

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
      <ButtonSection>{handleManageButton()}</ButtonSection>
    </ManageCardWrapper>
  );
}
