import { SectionContainer } from "../styled";
import { useInView } from "react-intersection-observer";
import {
  ColorText,
  Container,
  MainText,
  SubText,
  SvgWrapper,
  TextWrapper,
} from "./styled";
import Landing3 from "../../../../public/images/landing3.svg";

export default function ThirdSection() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  return (
    <SectionContainer ref={ref}>
      <Container style={{ display: inView ? "flex" : "none" }}>
        <SvgWrapper>
          <Landing3 />
        </SvgWrapper>
        <TextWrapper>
          <ColorText>간편한 지원</ColorText>
          <MainText>클릭 한번으로 프로젝트 지원 완료!</MainText>
          <SubText>
            오픈 채팅방 ? No!
            <br />
            이제 버튼 클릭 한번으로 원하는 프로젝트, 원하는 포지션에 간편하게
            지원할 수 있어요!
          </SubText>
        </TextWrapper>
      </Container>
    </SectionContainer>
  );
}
