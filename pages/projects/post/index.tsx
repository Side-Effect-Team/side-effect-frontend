import { useRouter } from "next/router";
import FormTitle from "@/postFormComps/FormTitle";
import { Wrapper, Contents } from "@/postFormComps/common/PageLayout.styled";
import PageHead from "components/PageHead";
import PostTitleInput from "@/postFormComps/PostTitleInput";
import ProjectUrlInput from "@/postFormComps/ProjectUrlInput";
import DescriptionInput from "@/postFormComps/DescriptionInput";
import ProjectImageInput from "@/postFormComps/ProjectImageInput";
import SubmitBtnBox from "@/postFormComps/SubmitBtnBox";
import { useInputImage } from "hooks/common/useInputImage";
import { DEFAULT_PROJECT_CARD_IMAGE, PROJECT_POST_FORM } from "enum";
import { useForm } from "hooks/common/useForm";
import formValidator from "utils/formValidator";
import { submitProjectPost } from "apis/ProjectAPI";

export default function PostProjectPage() {
  const router = useRouter();
  const { imgSrc, handleImgChange, uploadImg } = useInputImage(
    DEFAULT_PROJECT_CARD_IMAGE,
  );
  const { postForm, errMsgs, touched, handleChange, handleBlur, handleSubmit } =
    useForm({
      initialVals: { ...PROJECT_POST_FORM },
      validate: (form: typeof PROJECT_POST_FORM) => formValidator(form),
      onSubmit: () =>
        submitProjectPost(
          postForm as typeof PROJECT_POST_FORM,
          uploadImg,
          router,
        ),
    });

  return (
    <Wrapper>
      <PageHead pageTitle="프로젝트 자랑 글쓰기 | 사이드 이펙트" />
      <Contents>
        <FormTitle title="프로젝트 자랑하기" />
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
          <PostTitleInput
            idName="subTitle"
            label="한 줄 소개"
            guideText="어떤 프로젝트인지 한 줄로 알려주세요"
            placeHolder="3~30자 이내로 입력해주세요"
            touched={touched.subTitle as boolean}
            // @ts-ignore
            errMsg={errMsgs.subTitle}
            // @ts-ignore
            value={postForm.subTitle}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <ProjectUrlInput
            idName="projectUrl"
            label="프로젝트 URL"
            guideText="배포된 링크가 있다면 추가해보세요"
            placeHolder="https:// 부터의 전체 주소를 입력해주세요"
            touched={touched.projectUrl as boolean}
            // @ts-ignore
            errMsg={errMsgs.projectUrl}
            // @ts-ignore
            value={postForm.projectUrl}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
          <ProjectImageInput
            idName="image"
            label="대표 이미지"
            guideText="png, jpeg, jpg, gif 형식의 파일만 입력 가능합니다"
            defaultImageGuideText="아래는 이미지 미설정 시 적용될 기본 이미지입니다"
            imgSrc={imgSrc}
            handleImgChange={handleImgChange}
          />
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
