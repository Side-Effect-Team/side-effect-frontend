import FormTitle from "@/postFormComps/FormTitle";
import { Wrapper, Contents } from "@/postFormComps/common/PageLayout.styled";
import PageHead from "components/PageHead";
import PostTitleInput from "@/postFormComps/PostTitleInput";
import DescriptionInput from "@/postFormComps/DescriptionInput";

export default function PostRecruitPage() {
  return (
    <Wrapper>
      <PageHead pageTitle="팀원 모집 글쓰기 | 사이드 이펙트" />
      <Contents>
        <FormTitle title="팀원 모집하기" />
        <form>
          <PostTitleInput
            idName="title"
            label="게시글 제목"
            guideText="제목에 핵심 내용을 드러내보세요"
            placeHolder="3~20자 이내로 입력해주세요"
          />
          <PostTitleInput
            idName="projectName"
            label="프로젝트명"
            guideText="멋진 프로젝트 이름을 정해보세요"
            placeHolder="3~20자 이내로 입력해주세요"
          />
          <h2>모집 포지션</h2>
          <h2>태그 설정</h2>
          <DescriptionInput idName="content" label="상세 내용" />
        </form>
      </Contents>
    </Wrapper>
  );
}
