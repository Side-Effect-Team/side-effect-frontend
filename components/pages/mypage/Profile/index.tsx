import { DataProps } from "@/pages/mypage";
import { useRouter } from "next/router";
import {
  Border,
  ButtonWrapper,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
} from "../styled";
import Introduction from "./Introduction";
import Skill from "./Skill";
import Info from "./Info";
import Button from "@/components/Button";
import { Wrapper } from "./styled";

export default function Profile(data: DataProps) {
  const router = useRouter();
  const onClickGoToEditProfile = () => {
    router.push("/mypage/profileEdit");
  };
  return (
    <Wrapper>
      <Introduction
        avatarSrc={data.avatarSrc}
        nickname={data.nickname}
        email={data.email}
        introduction={data.introduction}
        // boards={data.boards}
        // follower={data.follower}
        // following={data.following}
      />
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Skill</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Skill skill={data.skill} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Info</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Info
          position={data.position}
          career={data.career}
          github={data.github}
          blog={data.blog}
          portfolio={data.portfolio}
        />
      </SectionWrapper>
      <ButtonWrapper>
        <Button onClick={onClickGoToEditProfile}>프로필 수정하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
