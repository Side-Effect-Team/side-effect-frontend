// import Carousel from "@/components/Carousel";
import styled from "styled-components";
import { CAROUSEL_CONTENTS_LIST } from "../enum";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  return (
    <Wrapper>
      {/* <Carousel data={CAROUSEL_CONTENTS_LIST} /> */}
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
