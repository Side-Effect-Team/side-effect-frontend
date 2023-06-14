import FormTitle from "@/formComps/FormTitle";
import { Wrapper, Contents } from "@/formComps/common/PageLayout.styled";
import PageHead from "components/PageHead";

export default function PostRecruitPage() {
  return (
    <Wrapper>
      <PageHead pageTitle="팀원 모집 글쓰기 | 사이드 이펙트" />
      <Contents>
        <FormTitle title="팀원 모집하기" />
        <form>
          <h2>게시글 제목</h2>
          <h2>프로젝트명</h2>
          <h2>모집 포지션</h2>
          <h2>태그 설정</h2>
          <h2>상세 내용</h2>
        </form>
      </Contents>
    </Wrapper>
  );
}
