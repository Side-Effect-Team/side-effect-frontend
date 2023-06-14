import { PROJECT_POST_FORM, RECRUIT_POST_FORM } from "enum";

const formValidator = (
  postForm: typeof PROJECT_POST_FORM | typeof RECRUIT_POST_FORM,
) => {
  const newErrorMsgs = isProjectPostForm(postForm)
    ? { ...PROJECT_POST_FORM }
    : { ...RECRUIT_POST_FORM };

  // 게시글 제목
  if (postForm.title.trim().length < 5)
    newErrorMsgs.title = "게시글 제목은 5자 이상 입력해야 합니다";

  // 프로젝트명
  if (
    postForm.projectName.trim().length < 3 ||
    postForm.projectName.trim().length > 20
  )
    newErrorMsgs.projectName = "프로젝트명은 3~20자 이내로 입력해주세요";

  if (isProjectPostForm(postForm) && isProjectPostForm(newErrorMsgs)) {
    // 한 줄 소개
    if (
      postForm.projectSubTitle.trim().length < 10 ||
      postForm.projectSubTitle.trim().length > 30
    )
      newErrorMsgs.projectSubTitle =
        "프로젝트 한 줄 소개는 10~30자 이내로 입력해주세요";

    // 프로젝트 URL
    if (postForm.projectUrl.trim().length === 0)
      newErrorMsgs.content = "프로젝트 URL을 입력해주세요";
  }

  // 상세 내용
  if (postForm.content.trim().length < 20)
    newErrorMsgs.content = "게시글 내용은 20자 이상 입력해야 합니다";

  if (isProjectPostForm(postForm) && isProjectPostForm(newErrorMsgs))
    return newErrorMsgs as typeof PROJECT_POST_FORM;
  return newErrorMsgs as typeof RECRUIT_POST_FORM;
};

// 타입 가드
const isProjectPostForm = (
  postForm: any,
): postForm is typeof PROJECT_POST_FORM => {
  return postForm.projectSubTitle !== undefined;
};

export default formValidator;
