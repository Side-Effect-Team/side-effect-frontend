import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
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
  GuideWrapper,
} from "@/postComps/common/PostForm.styled";
import Button from "@/components/Button";
import { useForm } from "@/hooks/common/useForm";
import { useInputImage } from "@/hooks/common/useInputImage";
import ProjectUrlBox from "@/postComps/ProjectUrlBox";
import { DEFAULT_PROJECT_CARD_IMAGE } from "../../enum";
import PageHead from "@/components/PageHead";

export const POST_FORM = {
  projectName: "",
  title: "",
  content: "",
};

export default function PostProjectPage() {
  const router = useRouter();
  const { imgSrc, handleImgChange } = useInputImage(DEFAULT_PROJECT_CARD_IMAGE);
  const [projectUrl, setProjectUrl] = useState("");
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
        // TODO 이미지 추가 필요
        const data = { ...postForm, projectUrl };

        // request
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/free-boards`, data, {
            headers: {
              // 로그인 기능 미구현으로 NEXT_PUBLIC_TOKEN에 발급받은 토큰을 넣고 실행!
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
          })
          .then((res) => {
            console.log("API 반환값", res);
            if (res.status === 200) {
              window.alert("게시글 등록이 완료되었습니다");
              router.push(`/projects/${res.data.id}`);
            }
          })
          .catch((err) => {
            console.log(err);
            window.alert("게시글 등록에 실패했습니다");
          });
      },
    });

  const handleCancel = () => {
    if (window.confirm("작성중인 내용이 사라집니다. 계속 진행하시겠습니까?"))
      router.push("/projects");
  };

  useEffect(() => {
    console.log(postForm);
  }, [postForm]);

  return (
    <Wrapper>
      <PageHead pageTitle="프로젝트 자랑 글쓰기 | 사이드 이펙트" />
      <Contents>
        <PostTitleStyled>프로젝트 자랑하기</PostTitleStyled>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <GuideWrapper>
              <LabelForm htmlFor="projectName">프로젝트명</LabelForm>
              <p>멋진 프로젝트 이름을 정해보세요</p>
            </GuideWrapper>
            <InputForm
              type="text"
              id="projectName"
              name="projectName"
              value={postForm.projectName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="3~20자 이내로 입력해주세요"
            />
            {touched.projectName && errMsgs.projectName && (
              <ErrorMsg>{errMsgs.projectName}</ErrorMsg>
            )}
          </InputBox>
          <InputBox>
            <GuideWrapper>
              <LabelForm htmlFor="title">게시글 제목</LabelForm>
              <p>제목에 핵심 내용을 드러내보세요</p>
            </GuideWrapper>
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
          <ProjectUrlBox
            projectUrl={projectUrl}
            setProjectUrl={setProjectUrl}
          />
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
