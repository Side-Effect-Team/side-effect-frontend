import styled from "styled-components";
import Banner from "@/components/Banner";
import { BANNER_CONTENTS } from "../../enum";
import PageHead from "@/components/PageHead";
import RecruitContents from "@/pageComponents/recruits/RecruitContents";

export default function RecruitsPage() {
  window.sessionStorage.removeItem("activeTab");

  return (
    <Wrapper>
      <PageHead pageTitle="팀원 모집 | 사이드 이펙트" />
      <Banner
        title={BANNER_CONTENTS.TITLE}
        subTitle={BANNER_CONTENTS.SUB_TITLE}
        btnTitle="모집하기"
        btnLink="/post/recruit"
      />
      <RecruitContents />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.mainBackGround};
`;
