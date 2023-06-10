import { SectionContainer } from "../styled";
import { SecondSectionContainer, Title } from "./styled";
import { useInView } from "react-intersection-observer";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import LeftSection from "./leftSection";
import RightSection from "./rightSection";
export default function ThirdSection({ data }: any) {
  const { ref, inView } = useInView({ threshold: 0.8 });
  console.log(data);
  const { id, imgUrl, title, subTitle } = data;

  return (
    <SectionContainer ref={ref}>
      {/* <Title>TOP RANKED PROJECTS</Title> */}
      <SecondSectionContainer>
        <LeftSection data={data} />
        <RightSection data={data} />
      </SecondSectionContainer>
    </SectionContainer>
  );
}
