import styled from "styled-components";
import Image from "next/image";
import profilePic from "../../../public/images/profilePic.png";
import Button from "../../Button";
import { media } from "@/styles/mediatest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import axios from "axios";
import useToast from "@/hooks/common/useToast";
interface ApplicatnsType {
  filter: string;
  email: string;
  nickName: string;
  applicantId: number;
  userId: number;
  projectId: string | string[] | undefined;
}

export default function ManageCard({
  filter,
  projectId,
  ...applicant
}: ApplicatnsType) {
  const isApplicantManage = filter === "pending";
  const router = useRouter();
  const { email, nickName, applicantId, userId } = applicant;
  const { addToast } = useToast();
  const queryClient = useQueryClient();
  const token = "";
  const handleApplicant = async (status: "approved" | "rejected") => {
    try {
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/applicant`,
        {
          recruitBoardId: projectId,
          applicantId,
          status,
        },
        { headers: { Authorization: token } },
      );
    } catch (err) {
      console.log(err);
    }
  };
  const handleMemberRemove = async () => {
    await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/applicant/release`,
      { recruitBoardId: projectId, applicantId },
      { headers: { Authorization: token } },
    );
  };
  const { mutate: removeMember } = useMutation(handleMemberRemove, {
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
  const { mutate } = useMutation(handleApplicant, {
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
          <Button onClick={() => mutate("approved")}>수락</Button>
          <Button onClick={() => mutate("rejected")}>거절</Button>
          <Button onClick={() => router.push(`/mypage/${userId}`)}>
            마이페이지
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button onClick={() => removeMember()}>추방</Button>
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
          <Info>{email}</Info>
        </ProfileInfo>
      </ProfileSection>
      <ButtonSection>{handleManageButton()}</ButtonSection>
    </ManageCardWrapper>
  );
}

const ManageCardWrapper = styled.li`
  display: flex;
  padding: 20px 10px;
  border-radius: 15px;
  align-items: center;
  gap: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
  ${media.mobile} {
    flex-direction: column;
  }
`;
const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;
const ProfileImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const Nickname = styled.span`
  font-weight: 500;
  font-size: large;
  ${media.mobile} {
    font-size: medium;
  }
`;
const Info = styled.span``;
