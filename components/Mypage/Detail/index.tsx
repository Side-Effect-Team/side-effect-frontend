import Button from "../../Button";
import {
  Border,
  ContentLink,
  ContentNum,
  ContentTitle,
  ContentsNumWrapper,
  InfoContent,
  InfoTitle,
  InfoWrapper,
  NickName,
  ProfileContentsWrapper,
  ProfileImage,
  ProfileWrapper,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
  Tag,
  TagWrapper,
  UserInfoWrapper,
  UserIntroduction,
  Wrapper,
} from "./styled";

export default function MyPageDetail() {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImage src="/img/BoardDefaultBackground.png" />
        <UserInfoWrapper>
          <ProfileContentsWrapper>
            <NickName>NickName</NickName>
            <ContentsNumWrapper>
              <ContentLink>
                <ContentNum>1</ContentNum>
                <ContentTitle>게시물</ContentTitle>
              </ContentLink>
              <ContentLink>
                <ContentNum>23</ContentNum>
                <ContentTitle>팔로워</ContentTitle>
              </ContentLink>
              <ContentLink>
                <ContentNum>20</ContentNum>
                <ContentTitle>팔로잉</ContentTitle>
              </ContentLink>
            </ContentsNumWrapper>
            <Button>프로필 수정하기</Button>
          </ProfileContentsWrapper>
          <UserIntroduction>
            간단한 자기소개 하는 란 입니다. 간단한 자기소개 하는 란 입니다.
            간단한 자기소개 하는 란 입니다. 간단한 자기소개 하는 란 입니다.
            간단한 자기소개 하는 란 입니다. 간단한 자기소개 하는 란 입니다.
            간단한 자기소개 하는 란 입니다. 간단한 자기소개 하는 란 입니다.
          </UserIntroduction>
        </UserInfoWrapper>
      </ProfileWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Skill</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <TagWrapper>
          <Tag>Typescript</Tag>
          <Tag>React</Tag>
          <Tag>HTML</Tag>
          <Tag>Next.js</Tag>
          <Tag>React-native</Tag>
        </TagWrapper>
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionTitle>Info</SectionTitle>
          <Border></Border>
        </SectionHeaderWrapper>
        <InfoWrapper>
          <InfoTitle>포지션</InfoTitle>
          <InfoContent>프론트엔드</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>경력</InfoTitle>
          <InfoContent>취업준비생</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>깃허브</InfoTitle>
          <InfoContent>링크</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>블로그</InfoTitle>
          <InfoContent>링크</InfoContent>
        </InfoWrapper>
        <InfoWrapper>
          <InfoTitle>포트폴리오</InfoTitle>
          <InfoContent>링크</InfoContent>
        </InfoWrapper>
      </SectionWrapper>
    </Wrapper>
  );
}
