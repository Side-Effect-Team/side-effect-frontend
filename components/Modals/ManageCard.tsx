import styled from "styled-components";
import Image from "next/image";
import profilePic from "../../public/images/profilePic.png";
import Button from "../Button";
import { mediaQuery } from "@/styles/Media";
interface Props {
  filter: string;
}

export default function ManageCard({ filter }: Props) {
  const isApplicantManage = filter === "지원현황";

  const handleButton = () => {
    if (isApplicantManage) {
      return (
        <>
          <Button>수락</Button>
          <Button>거절</Button>
          <Button>마이페이지</Button>
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
            fill
          />
        </ProfileImage>
        <ProfileInfo>
          <Nickname>닉네임</Nickname>
          <Info>awpodaw1234p@naver.com</Info>
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
  ${mediaQuery("mobile")`
    flex-direction:column;
  `}
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
`;
const Info = styled.span``;
