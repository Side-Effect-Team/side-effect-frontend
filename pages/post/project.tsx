import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import { PostTitleStyled } from "@/postComps/common/Title.styled";
import {
  InputBox,
  LabelForm,
  InputForm,
  TextareaForm,
  SubmitBtnBox,
  ErrorMsg,
  ImageBox,
} from "@/postComps/common/PostForm.styled";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Button from "@/components/Button";
import { useForm } from "@/hooks/useForm";
import { useInputImage } from "@/hooks/useInputImage";
import { DEFAULT_PROJECT_CARD_IMAGE } from "../../enum";

export const POST_FORM = {
  projectName: "",
  title: "",
  content: "",
};

export default function PostProjectPage() {
  const router = useRouter();
  const { getter, setter } = useLocalStorage();
  const { imgSrc, handleImgChange } = useInputImage(DEFAULT_PROJECT_CARD_IMAGE);
  const { postForm, errMsgs, touched, handleChange, handleBlur, handleSubmit } =
    useForm({
      initialVals: { ...POST_FORM },
      validate: (postForm: typeof POST_FORM) => {
        const newErrorMsgs = { ...POST_FORM };

        // 프로젝트명
        if (
          postForm.projectName.trim().length < 3 ||
          postForm.projectName.trim().length > 20
        )
          newErrorMsgs.projectName = "프로젝트명은 3~20자 이내로 입력해주세요";

        // 게시글 제목
        if (postForm.title.trim().length < 5)
          newErrorMsgs.title = "게시글 제목은 5자 이상 입력해야 합니다";

        // 상세 내용
        if (postForm.content.trim().length < 20)
          newErrorMsgs.content = "게시글 내용은 20자 이상 입력해야 합니다";

        return newErrorMsgs;
      },
      onSubmit: async () => {
        const projects = getter("projects");
        setter("projects", [...projects, postForm]);
        window.alert("등록이 완료되었습니다");
        await router.push("/projects"); // FIXME: API 연결 후 생성한 게시글 페이지로 이동
      },
    });

  const handleCancel = () => {
    if (window.confirm("작성중인 내용이 사라집니다. 계속 진행하시겠습니까?"))
      router.push("/projects");
  };

  useEffect(() => {
    const projects = getter("projects");
    if (!projects) setter("projects", []);
  }, [getter, setter]);

  return (
    <Wrapper>
      <Contents>
        <PostTitleStyled>프로젝트 자랑하기</PostTitleStyled>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <LabelForm htmlFor="projectName">프로젝트명</LabelForm>
            <InputForm
              type="text"
              id="projectName"
              name="projectName"
              value={postForm.projectName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.projectName && errMsgs.projectName && (
              <ErrorMsg>{errMsgs.projectName}</ErrorMsg>
            )}
          </InputBox>
          <InputBox>
            <LabelForm htmlFor="title">게시글 제목</LabelForm>
            <InputForm
              type="text"
              id="title"
              name="title"
              value={postForm.title}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.title && errMsgs.title && (
              <ErrorMsg>{errMsgs.title}</ErrorMsg>
            )}
          </InputBox>
          <InputBox>
            <LabelForm htmlFor="image">대표 이미지</LabelForm>
            <InputForm
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImgChange}
            />
            <ImageBox>
              {imgSrc === DEFAULT_PROJECT_CARD_IMAGE && (
                <p>이미지 미설정 시 적용될 기본 이미지입니다</p>
              )}
              <Image src={imgSrc} alt="" width={250} height={150} priority />
            </ImageBox>
          </InputBox>
          <InputBox>
            <LabelForm htmlFor="content">상세 내용</LabelForm>
            <TextareaForm
              id="content"
              name="content"
              value={postForm.content}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.content && errMsgs.content && (
              <ErrorMsg>{errMsgs.content}</ErrorMsg>
            )}
          </InputBox>
          <SubmitBtnBox>
            <Button type="submit">등록</Button>
            <Button type="button" onClick={handleCancel}>
              취소
            </Button>
          </SubmitBtnBox>
        </form>
      </Contents>
    </Wrapper>
  );
}
