import Carousel from "../components/Carousel";
import styled from "styled-components";
import SelectBox from "../components/SelectBox";
const Dummy = { title: "awd", options: ["v", "a", "d"] };
export default function Home() {
  return (
    <Wrapper>
      <Carousel />
      <MainStyled>
        <SelectBox data={Dummy} />
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
