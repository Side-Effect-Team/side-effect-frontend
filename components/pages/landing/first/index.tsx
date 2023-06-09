import { useTheme } from "styled-components";
import { SectionContainer } from "../styled";
import LandingFirst from "../../../../public/images/landingFirst.svg";
import Scroll from "../../../../public/images/scroll.svg";
import FlowBox from "@/components/FlowBox";
import { Container, LandingImgWrapper, ScrollWrapper, Wrapper } from "./styled";

export default function FirstSection() {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Container>
        <Wrapper>
          <LandingImgWrapper>
            <LandingFirst fill={theme.textColor} />
          </LandingImgWrapper>
          <ScrollWrapper>
            <Scroll fill={theme.textColor} />
          </ScrollWrapper>
        </Wrapper>
        <FlowBox />
      </Container>
    </SectionContainer>
  );
}
