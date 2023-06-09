import { SectionContainer } from "../styled";
import { useInView } from "react-intersection-observer";

export default function ThirdSection() {
  const { ref, inView } = useInView({ threshold: 0.8 });
  return <SectionContainer ref={ref}></SectionContainer>;
}
