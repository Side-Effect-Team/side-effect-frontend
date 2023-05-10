import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GoPlus } from "react-icons/go";
import { Wrapper, Contents } from "@/postComps/common/PageLayout.styled";
import { PostTitleStyled } from "@/postComps/common/Title.styled";
import {
  InputBox,
  PositionBoxContainer,
  LabelForm,
  InputForm,
  TextareaForm,
  SubmitBtnBox,
  ErrorMsg,
  ImageBox,
  GuideWrapper,
} from "@/postComps/common/PostForm.styled";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import Button from "@/components/Button";
import TagBox from "@/postComps/TagBox";
import { useTag } from "@/hooks/useTag";
import { useForm } from "@/hooks/useForm";
import PositionBox from "@/postComps/PositionBox";
import { useInputImage } from "@/hooks/useInputImage";
import { DEFAULT_RECRUIT_CARD_IMAGE } from "../../enum";

export const POSITIONS = [
  {
    id: 1,
    positionType: "frontend",
    targetNumber: 0,
  },
];

export const POST_FORM = {
  projectName: "",
  title: "",
  positions: [],
  content: "",
};

export default function PostRecruitPage() {
  const router = useRouter();
  const [positions, setPositions] = useState([...POSITIONS]);
  const { tags } = useTag();
  const { getter, setter } = useLocalStorage();
  const { imgSrc, handleImgChange } = useInputImage(DEFAULT_RECRUIT_CARD_IMAGE);
  const {
    postForm,
    setPostForm,
    errMsgs,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
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

  // 등록 취소 버튼 클릭 핸들러
  const handleCancel = () => {
    if (window.confirm("작성중인 내용이 사라집니다. 계속 진행하시겠습니까?"))
      router.push("/projects");
  };

  // 포지션 업데이트
  const handlePosition = (id: number, update: (typeof POSITIONS)[0]) => {
    const newPositions = [...positions];
    const idx = newPositions.findIndex((position) => position.id === id);
    newPositions.splice(idx, 1, update);
    setPositions(newPositions);
  };

  // 포지션 추가
  const AddPosition = () => {
    const lastIdx = positions[positions.length - 1].id;
    setPositions([...positions, { ...POSITIONS[0], id: lastIdx + 1 }]);
  };

  // 포지션 제거
  const deletePosition = (id: number) => {
    const newPositions = positions.filter((position) => position.id !== id);
    setPositions([...newPositions]);
  };

  useEffect(() => {
    const projects = getter("projects");
    if (!projects) setter("projects", []);
  }, [getter, setter]);

  return (
    <Wrapper>
      <Contents>
        <PostTitleStyled>팀원 모집하기</PostTitleStyled>
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
          <InputBox>
            <GuideWrapper>
              <LabelForm>모집 포지션</LabelForm>
              <p>모집할 포지션과 인원 수를 설정할 수 있습니다</p>
            </GuideWrapper>
            <PositionBoxContainer>
              {positions.map((position, idx) => (
                <PositionBox
                  key={idx}
                  data={position}
                  onDelete={deletePosition}
                  handlePosition={handlePosition}
                />
              ))}
              <div>
                <Button type="button" onClick={AddPosition}>
                  <GoPlus style={{ transform: "scale(1.2)" }} />
                </Button>
              </div>
            </PositionBoxContainer>
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
              {imgSrc === DEFAULT_RECRUIT_CARD_IMAGE && (
                <p>이미지 미설정 시 적용될 기본 이미지입니다</p>
              )}
              <Image src={imgSrc} alt="" width={250} height={150} priority />
            </ImageBox>
          </InputBox>
          <TagBox />
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
