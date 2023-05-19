import styled from "styled-components";
import { CAROUSEL_CONTENTS_LIST } from "../enum";
import MainCarousel from "@/components/Carousel/MainCarousel";
import BatchCarousel from "@/components/Carousel/BatchCarousel";

export default function HomePage() {
  return (
    <Wrapper>
      <MainCarousel data={CAROUSEL_CONTENTS_LIST} />
      <MainStyled>
        <BatchCarousel
          title="이달의 베스트 프로젝트"
          category="projects"
          maxCards={8}
          queryKey="topLikedProjects"
        />
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
        <h2>메인 컨텐츠</h2>
      </MainStyled>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: ${(p) => p.theme.colors.background};
`;

const MainStyled = styled.section`
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  max-width: ${(p) => p.theme.sizes.desktop};
`;
