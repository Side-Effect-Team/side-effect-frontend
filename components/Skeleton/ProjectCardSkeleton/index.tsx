import {
  SkeletonCardWrapper,
  Header,
  Title,
  Content,
  ContentsWrapper,
  Footer,
  CreateAt,
  Comment,
  SkelectonContainer,
} from "./styled";

export default function ProjectCardSkeleton() {
  return (
    <SkelectonContainer>
      {[...Array(4)].fill("").map((_, index) => {
        return (
          <SkeletonCardWrapper key={index}>
            <Header />
            <ContentsWrapper>
              <Title />
              <Content />
              <Footer>
                <CreateAt />
                <Comment />
              </Footer>
            </ContentsWrapper>
          </SkeletonCardWrapper>
        );
      })}
    </SkelectonContainer>
  );
}
