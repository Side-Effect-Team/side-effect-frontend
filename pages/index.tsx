import Button from "../components/Button";
import Carousel from "../components/Carousel";
import styled from "styled-components";
import Input from "../components/Input";
import BoardCard from "../components/BoardCard";

export default function Home() {
  return (
    <Wrapper>
      <Carousel />
      <BoardCard />
      <MainStyled>
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
