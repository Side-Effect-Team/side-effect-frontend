import { Container, Contents, Title, Wrapper } from "./styled";

export default function Notification() {
  return (
    <Container>
      <Wrapper>
        <Title>팀원 모집</Title>
        <Contents>
          이런 저런 프로젝트 게시물에 프론트엔드 신청자가 있어요!
        </Contents>
      </Wrapper>
      <Wrapper>
        <Title>프로젝트 자랑</Title>
        <Contents>oh my pet 게시물에 댓글이 달렸어요!</Contents>
      </Wrapper>
      <Wrapper></Wrapper>
      <Wrapper></Wrapper>
    </Container>
  );
}
