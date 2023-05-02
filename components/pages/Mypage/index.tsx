import { useRouter } from "next/router";
import Button from "../../Button";
import {
  Border,
  ButtonWrapper,
  ContentLink,
  ContentNum,
  ContentTitle,
  ContentsList,
  InfoContent,
  InfoContentLink,
  InfoTitle,
  InfoWrapper,
  NickName,
  ProfileImage,
  ProfileWrapper,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
  Tag,
  TagWrapper,
  Text,
  Wrapper,
} from "./styled";

interface DataProps {
  avatarSrc?: string;
  nickname: string;
  introduction?: string;
  boards: number;
  follower: number;
  following: number;
  skill?: string[];
  position: string;
  career: string;
  github: string;
  blog: string;
  portfolio: string;
}
interface MyPageDetailProps {
  data?: DataProps;
}
export default function MyPageDetail(p: MyPageDetailProps) {
  const router = useRouter();
  const onClickEditProfile = () => {
    router.push("/mypage/edit");
  };
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImage
          src={p.data?.avatarSrc || "/images/ProDefaultBackground.png"}
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
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Skill</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <TagWrapper>
          {p.data?.skill?.map((el, index) => <Tag key={index}>{el}</Tag>) || (
            <Text>아직 작성된 정보가 없습니다.</Text>
          )}
        </TagWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Info</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <InfoWrapper>
          <InfoTitle>포지션</InfoTitle>
          <InfoContent>{p.data?.position}</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>경력</InfoTitle>
          <InfoContent>{p.data?.career}</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>깃허브</InfoTitle>
          {p.data?.github ? (
            <InfoContentLink href={p.data?.github} target="_blank">
              {p.data?.github}
            </InfoContentLink>
          ) : (
            <Text>아직 작성된 정보가 없습니다.</Text>
          )}
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>블로그</InfoTitle>
          {p.data?.blog ? (
            <InfoContentLink href={p.data?.blog} target="_blank">
              {p.data?.blog}
            </InfoContentLink>
          ) : (
            <Text>아직 작성된 정보가 없습니다.</Text>
          )}
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>포트폴리오</InfoTitle>
          {p.data?.portfolio ? (
            <InfoContentLink href={p.data?.portfolio} target="_blank">
              {p.data?.portfolio}
            </InfoContentLink>
          ) : (
            <Text>아직 작성된 정보가 없습니다.</Text>
          )}
        </InfoWrapper>
      </SectionWrapper>
      <ButtonWrapper>
        <Button onClick={onClickEditProfile}>프로필 수정하기</Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
