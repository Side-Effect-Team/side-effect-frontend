import styled from "styled-components";
import Banner from "../../components/Banner";
import { BANNER_CONTENTS } from "../../enum";

export default function RecruitsPage() {
  return (
    <Wrapper>
      <Banner
        title={BANNER_CONTENTS.TITLE}
        subTitle={BANNER_CONTENTS.SUB_TITLE}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colors.background};
`;
