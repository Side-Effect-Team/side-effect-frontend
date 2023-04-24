import styled from "styled-components";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Section>
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
      </Section>
      <Footer />
    </div>
  );
}

const Section = styled.section`
  margin: 0 auto;
  max-width: ${(props) => props.theme.viewport.large};
`;
