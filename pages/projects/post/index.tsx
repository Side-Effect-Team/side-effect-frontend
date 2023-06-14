import FormTitle from "@/formComps/FormTitle";
import { Wrapper, Contents } from "@/formComps/common/PageLayout.styled";
import PageHead from "components/PageHead";

export default function PostProjectPage() {
  return (
    <Wrapper>
      <PageHead pageTitle="프로젝트 자랑 글쓰기 | 사이드 이펙트" />
      <Contents>
        <FormTitle title="프로젝트 자랑하기" />
        <form>
          <h2>게시글 제목</h2>
          <h2>프로젝트명</h2>
          <h2>한 줄 소개</h2>
          <h2>프로젝트 URL</h2>
          <h2>대표 이미지</h2>
          <h2>상세 내용</h2>
        </form>
      </Contents>
    </Wrapper>
  );
}
