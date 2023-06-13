import styled from "styled-components";
import { CAROUSEL_CONTENTS_LIST } from "../enum";
import MainCarousel from "@/components/Carousel/MainCarousel";
import BatchCarousel from "@/components/Carousel/BatchCarousel";
import FirstSection from "@/components/pages/landing/first";
import SecondSection from "@/components/pages/landing/second";
import ThirdSection from "@/components/pages/landing/third";
import FourthSection from "@/components/pages/landing/fourth";
import FifthSection from "@/components/pages/landing/fifth";
import axios from "axios";
export default function HomePage({ data }: any) {
  window.sessionStorage.removeItem("activeTab");
  return (
    <>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection data={data} />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await axios.get("/free-boards/rank");
  return {
    props: { data },
  };
}
