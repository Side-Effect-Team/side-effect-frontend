import {
  Comment,
  CreateAt,
  Footer,
  RecruitSkeletonWrapper,
  TagWrapper,
  Title,
} from "./styled";

export default function RecruitCardSkeleton() {
  return (
    <RecruitSkeletonWrapper>
      <Title />
      <TagWrapper />
      <TagWrapper />
      <Footer>
        <CreateAt />
        <Comment />
      </Footer>
    </RecruitSkeletonWrapper>
  );
}
