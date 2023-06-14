import FormTitle from "@/postFormComps/FormTitle";
import { Wrapper, Contents } from "@/postFormComps/common/PageLayout.styled";
import PageHead from "components/PageHead";
import PostTitleInput from "@/postFormComps/PostTitleInput";

export default function PostProjectPage() {
  return (
    <Wrapper>
      <PageHead pageTitle="프로젝트 자랑 글쓰기 | 사이드 이펙트" />
      <Contents>
        <FormTitle title="프로젝트 자랑하기" />
        <form>
          <PostTitleInput
            idName="title"
            label="게시글 제목"
            guideText="제목에 핵심 내용을 드러내보세요"
            placeHolder=""
          />
          <PostTitleInput
            idName="projectName"
            label="프로젝트명"
            guideText="멋진 프로젝트 이름을 정해보세요"
            placeHolder="3~20자 이내로 입력해주세요"
          />
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
