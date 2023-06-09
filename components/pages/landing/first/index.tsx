import { useTheme } from "styled-components";
import { SectionContainer } from "../styled";
import LandingFirst from "../../../../public/images/landingFirst.svg";
import FlowBox from "@/components/FlowBox";
import { Container, LandingImgWrapper, Wrapper } from "./styled";

export default function FirstSection() {
  const theme = useTheme();

  return (
    <SectionContainer>
      <Container>
        <Wrapper>
          <LandingImgWrapper>
            <LandingFirst fill={theme.textColor} />
          </LandingImgWrapper>
        </Wrapper>
        <FlowBox />
      </Container>
    </SectionContainer>
  );
}
