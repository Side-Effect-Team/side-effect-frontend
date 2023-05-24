import { MypageProps } from "@/pages/mypage";
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

export default function Profile(data: MypageProps) {
  const router = useRouter();
  const onClickGoToEditProfile = () => {
    router.push("/mypage/profileEdit");
  };
  return (
    <Wrapper>
      <Introduction
        imgUrl={data.imgUrl}
        nickname={data.nickname}
        email={data.email}
        introduction={data.introduction}
      />

      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Skill</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Skill tags={data.tags} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Info</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <Info
          position={data.position}
          career={data.career}
          githubUrl={data.githubUrl}
          blogUrl={data.blogUrl}
          portfolioUrl={data.portfolioUrl}
        />
      </SectionWrapper>
      <ButtonWrapper>
        {data.isOwner && (
          <Button onClick={onClickGoToEditProfile}>프로필 수정하기</Button>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
}
