import { SectionContainer } from "../styled";

import { useInView } from "react-intersection-observer";
export default function SecondSection() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return <SectionContainer ref={ref}></SectionContainer>;
}
