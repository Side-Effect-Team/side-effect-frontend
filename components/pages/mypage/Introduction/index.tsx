import { MyPageProps } from "@/pages/mypage";
import {
  ContentLink,
  ContentNum,
  ContentTitle,
  ContentsList,
  NickName,
  ProfileImage,
  ProfileWrapper,
  Text,
} from "./styled";

export default function Introduction(p: MyPageProps) {
  return (
    <ProfileWrapper>
      <ProfileImage
        src={p.data?.avatarSrc || "/images/BoardDefaultBackground.png"}
      />
      <NickName>{p.data?.nickname || ""}</NickName>
      <Text>{p.data?.introduction || "아직 소개가 없습니다."}</Text>
      <ContentsList>
        <ContentLink>
          <ContentNum>{p.data?.boards}</ContentNum>
          <ContentTitle>게시물</ContentTitle>
        </ContentLink>
        <ContentLink>
          <ContentNum>{p.data?.follower}</ContentNum>
          <ContentTitle>팔로워</ContentTitle>
        </ContentLink>
        <ContentLink>
          <ContentNum>{p.data?.following}</ContentNum>
          <ContentTitle>팔로잉</ContentTitle>
        </ContentLink>
      </ContentsList>
    </ProfileWrapper>
  );
}
