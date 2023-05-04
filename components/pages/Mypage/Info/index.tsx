import { MyPageProps } from "@/pages/mypage";
import {
  InfoContent,
  InfoContentLink,
  InfoTitle,
  InfoWrapper,
  Text,
} from "./styled";

export default function Info(p: MyPageProps) {
  return (
    <>
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
    </>
  );
}
