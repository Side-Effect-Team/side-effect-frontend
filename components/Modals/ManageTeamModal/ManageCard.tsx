import styled from "styled-components";
import Image from "next/image";
import profilePic from "../../../public/images/profilePic.png";
import Button from "../../Button";
import { media } from "@/styles/mediatest";
import useToast from "../../../hooks/useToast";
interface Props {
  filter: string;
  email: string;
  nickName: string;
}

export default function ManageCard({ filter, email, nickName }: Props) {
  const isApplicantManage = filter === "지원현황";
  const { addToast } = useToast();

  const handleButton = () => {
    if (isApplicantManage) {
      return (
        <>
          <Button
            onClick={() =>
              addToast({
                type: "success",
                title: "Succese",
                content: "팀원에게 수락 알림을 보냈습니다!",
              })
            }
          >
            수락
          </Button>
          <Button
            onClick={() =>
              addToast({
                type: "error",
                title: "Something Wrong",
                content:
                  "알 수 없는 에러가 발생하였습니다. 문의 사항은 고객센터로 연락 부탁드립니다.",
              })
            }
          >
            거절
          </Button>
          <Button
            onClick={() =>
              addToast({
                type: "info",
                title: "Info",
                content: "프로필 편집을 취소하였습니다!",
              })
            }
          >
            마이페이지
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button>추방</Button>
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
            alt={"Profile Image"}
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
      <ButtonSection>{handleButton()}</ButtonSection>
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
