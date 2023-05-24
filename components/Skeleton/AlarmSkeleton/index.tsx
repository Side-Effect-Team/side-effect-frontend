import { Contents, Date, RowWrapper, Title, Wrapper } from "./styled";

export default function AlarmSkeleton() {
  return (
    <Wrapper>
      <RowWrapper>
        <Title></Title>
      </RowWrapper>
      <RowWrapper>
        <Contents></Contents>
        <Date></Date>
      </RowWrapper>
    </Wrapper>
  );
}
