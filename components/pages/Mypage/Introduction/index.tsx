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

interface IntroductionProps {
  avatarSrc: string | undefined;
  nickname: string;
  introduction: string | undefined;
  boards: number;
  follower: number;
  following: number;
}

export default function Introduction({
  avatarSrc,
  nickname,
  introduction,
  boards,
  follower,
  following,
}: IntroductionProps) {
  return (
    <ProfileWrapper>
      <ProfileImage src={avatarSrc || "/images/BoardDefaultBackground.png"} />
      <NickName>{nickname || ""}</NickName>
      <Text>{introduction || "아직 소개가 없습니다."}</Text>
      <ContentsList>
        <ContentLink>
          <ContentNum>{boards}</ContentNum>
          <ContentTitle>게시물</ContentTitle>
        </ContentLink>
        <ContentLink>
          <ContentNum>{follower}</ContentNum>
          <ContentTitle>팔로워</ContentTitle>
        </ContentLink>
        <ContentLink>
          <ContentNum>{following}</ContentNum>
          <ContentTitle>팔로잉</ContentTitle>
        </ContentLink>
      </ContentsList>
    </ProfileWrapper>
  );
}
