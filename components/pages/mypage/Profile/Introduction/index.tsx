import {
  ContentLink,
  ContentNum,
  ContentTitle,
  ContentsList,
  NickName,
  ProfileImage,
  ProfileWrapper,
  ShortBorder,
  Text,
} from "./styled";

interface IntroductionProps {
  imgUrl: string | undefined;
  nickname: string;
  email: string;
  introduction: string | undefined;
  // boards: number;
  // follower: number;
  // following: number;
}

export default function Introduction({
  imgUrl,
  nickname,
  email,
  introduction,
}: // boards,
// follower,
// following,
IntroductionProps) {
  return (
    <ProfileWrapper>
      <ProfileImage src={imgUrl || "/images/BoardDefaultBackground.png"} />
      <NickName>{nickname || ""}</NickName>
      <Text>{email}</Text>
      <ShortBorder></ShortBorder>
      <Text>{introduction || "아직 소개가 없습니다."}</Text>
      {/* <ContentsList>
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
      </ContentsList> */}
    </ProfileWrapper>
  );
}
