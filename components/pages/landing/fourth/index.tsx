import { SectionContainer } from "../styled";
import { useInView } from "react-intersection-observer";

import Landing4 from "../../../../public/images/landing4.svg";
import {
  ColorText,
  Container,
  MainText,
  SubText,
  SvgWrapper,
  TextWrapper,
} from "./styled";

export default function FourthSection() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  return (
    <SectionContainer ref={ref}>
      <Container style={{ display: inView ? "flex" : "none" }}>
        <TextWrapper>
          <ColorText>프로젝트 팀원 관리</ColorText>
          <MainText>모집글에 지원한 팀원도 한눈에!</MainText>
          <SubText>
            팀원 관리 모달로 지원자를 포지션에 따라 분류하고 편리하게
            관리하세요!
          </SubText>
        </TextWrapper>
        <SvgWrapper>
          <Landing4 />
        </SvgWrapper>
      </Container>
    </SectionContainer>
  );
}
