import { useRouter } from "next/router";
import FormTitle from "@/postFormComps/FormTitle";
import { Wrapper, Contents } from "@/postFormComps/common/PageLayout.styled";
import PageHead from "components/PageHead";
import PostTitleInput from "@/postFormComps/PostTitleInput";
import DescriptionInput from "@/postFormComps/DescriptionInput";
import RecruitPositionInput from "@/postFormComps/RecruitPositionInput";
import SubmitBtnBox from "@/postFormComps/SubmitBtnBox";
import { useForm } from "hooks/common/useForm";
import { usePosition } from "hooks/common/usePosition";
import formValidator from "utils/formValidator";
import { RECRUIT_POST_FORM, RECRUIT_POSITION_FORM } from "enum";
import { submitRecruitPost } from "apis/RecruitBoardAPI";

export default function PostRecruitPage() {
  const router = useRouter();
  const {
    positions,
    addPosition,
    deletePosition,
    validatePosition,
    editPosition,
  } = usePosition();
  const { postForm, errMsgs, touched, handleChange, handleBlur, handleSubmit } =
    useForm({
      initialVals: { ...RECRUIT_POST_FORM },
      validate: (form: typeof RECRUIT_POST_FORM) => formValidator(form),
      onSubmit: () => {
        if (validatePosition())
          submitRecruitPost(postForm, positions, ["react"], router);
      },
    });

  return (
    <Wrapper>
      <PageHead pageTitle="팀원 모집 글쓰기 | 사이드 이펙트" />
      <Contents>
        <FormTitle title="팀원 모집하기" />
        <form onSubmit={handleSubmit}>
          <PostTitleInput
            idName="title"
            label="게시글 제목"
            guideText="제목에 핵심 내용을 드러내보세요"
            placeHolder="3~30자 이내로 입력해주세요"
            touched={touched.title as boolean}
            errMsg={errMsgs.title}
            value={postForm.title}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <PostTitleInput
            idName="projectName"
            label="프로젝트명"
            guideText="멋진 프로젝트 이름을 정해보세요"
            placeHolder="3~20자 이내로 입력해주세요"
            touched={touched.projectName as boolean}
            errMsg={errMsgs.projectName}
            value={postForm.projectName}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <RecruitPositionInput
            label="모집 포지션"
            guideText="모집할 포지션과 인원 수를 설정할 수 있습니다"
            positions={positions}
            addPosition={addPosition}
            deletePosition={deletePosition}
            editPosition={editPosition}
            isEdit={false}
          />
          <h2>기술 스택</h2>
          <p>추가 예정</p>
          <DescriptionInput
            idName="content"
            label="상세 내용"
            touched={touched.content as boolean}
            errMsg={errMsgs.content}
            value={postForm.content}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <SubmitBtnBox router={router} />
        </form>
      </Contents>
    </Wrapper>
  );
}
