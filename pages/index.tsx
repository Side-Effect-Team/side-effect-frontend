import FirstSection from "components/pages/landing/first";
import SecondSection from "components/pages/landing/second";
import ThirdSection from "components/pages/landing/third";
import FourthSection from "components/pages/landing/fourth";
import FifthSection from "components/pages/landing/fifth";
import axios from "axios";
export interface BestProjectDataType {
  content: string;
  id: number;
  imgUrl: string;
  likeNum: number;
  subTitle: string;
  title: string;
}
export interface BestProjectType {
  data: BestProjectDataType[];
}
export default function HomePage({ data }: BestProjectType) {
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
