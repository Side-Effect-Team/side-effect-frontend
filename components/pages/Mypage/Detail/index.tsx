import { ButtonsWrapper } from "../../../BoardCard/styled";
import Button from "../../../Button";
import {
  Border,
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
  followInfo: {
    title: string;
    num: number;
  }[];
  skill?: string[];
  info?: {
    title: string;
    content: string;
    link: boolean;
  }[];
}
interface MyPageDetailProps {
  data?: DataProps;
}
export default function MyPageDetail(p: MyPageDetailProps) {
  return (
    <Wrapper>
      <ProfileWrapper>
        <ProfileImage
          src={p.data?.avatarSrc || "/img/BoardDefaultBackground.png"}
        />
        <NickName>{p.data?.nickname || ""}</NickName>
        <Text>{p.data?.introduction || "아직 소개가 없습니다."}</Text>
        <ContentsList>
          {p.data?.followInfo.map((el, index) => (
            <ContentLink key={index}>
              <ContentNum>{el.num}</ContentNum>
              <ContentTitle>{el.title}</ContentTitle>
            </ContentLink>
          ))}
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
        {p.data?.info ? (
          p.data.info.map((el, index) => (
            <InfoWrapper key={index}>
              <InfoTitle>{el.title}</InfoTitle>
              {el.link ? (
                <InfoContentLink href={el.content} target="_blank">
                  {el.content}
                </InfoContentLink>
              ) : (
                <InfoContent>{el.content}</InfoContent>
              )}
            </InfoWrapper>
          ))
        ) : (
          <Text>아직 작성된 정보가 없습니다.</Text>
        )}
      </SectionWrapper>
      <ButtonsWrapper>
        <Button>프로필 수정하기</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
}
