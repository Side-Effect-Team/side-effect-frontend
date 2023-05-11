import {
  NickName,
  ProfileImage,
  ProfileWrapper,
  ShortBorder,
  Text,
} from "./styled";

interface IntroductionProps {
  imgUrl: string | undefined;
  nickname: string;
  email: string | undefined;
  introduction: string | undefined;
}

export default function Introduction({
  imgUrl,
  nickname,
  email,
  introduction,
}: IntroductionProps) {
  return (
    <ProfileWrapper>
      <ProfileImage src={imgUrl || "/images/BoardDefaultBackground.png"} />
      <NickName>{nickname || ""}</NickName>
      <Text>{email}</Text>
      <ShortBorder></ShortBorder>
      <Text>{introduction || "아직 소개가 없습니다."}</Text>
    </ProfileWrapper>
  );
}
