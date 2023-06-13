import { SectionContainer } from "../styled";

import { useInView } from "react-intersection-observer";
import { MainText, SubText, SubWrapper, Wrapper } from "./styled";
export default function SecondSection() {
  const { ref, inView } = useInView({ threshold: 0.6 });

  return (
    <SectionContainer ref={ref}>
      <Wrapper style={{ display: inView ? "flex" : "none" }}>
        <MainText>
          사이드이펙트에서
          <br /> 프로젝트 모집부터 결과물까지 <br />
          한번에 관리해보세요!
        </MainText>
        <SubWrapper>
          <SubText style={{ fontWeight: "bolder" }}>
            MAKE TEAM, SHOW YOUR PROJECT
          </SubText>
          <SubText>
            지금까지와는 다른 프로젝트 모집 플랫폼
            <br />
            사이트 이펙트와 함께 커리어를 만들어가요
          </SubText>
        </SubWrapper>
      </Wrapper>
    </SectionContainer>
  );
}
