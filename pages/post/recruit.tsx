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
import Button from "@/components/Button";
import TagBox from "@/postComps/TagBox";
import { useTag } from "@/hooks/useTag";
import { useForm } from "@/hooks/useForm";
import PositionBox from "@/postComps/PositionBox";
import { useInputImage } from "@/hooks/useInputImage";
import { DEFAULT_RECRUIT_CARD_IMAGE } from "../../enum";
import PageHead from "@/components/PageHead";
import axios from "axios";

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
  content: "",
};

export default function PostRecruitPage() {
  const router = useRouter();
  const [positions, setPositions] = useState([...POSITIONS]);
  const { tags, deleteTag, addTag } = useTag();
  const { imgSrc, handleImgChange } = useInputImage(DEFAULT_RECRUIT_CARD_IMAGE);
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
        const newPositions = positions.map(
          ({ positionType, targetNumber }) => ({
            positionType,
            targetNumber: +targetNumber,
          }),
        );
        const data = {
          ...postForm,
          imgSrc: null, // 이미지 사용 불가하여 null 대체
          tags,
          positions: newPositions,
        };

        // request
        axios
          .post(`${process.env.NEXT_PUBLIC_API_URL}/recruit-board`, data, {
            headers: {
              // 로그인 기능 미구현으로 NEXT_PUBLIC_TOKEN에 발급받은 토큰을 넣고 실행!
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
            },
          })
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              window.alert("게시글 등록이 완료되었습니다");
              router.push(`/recruits/${res.data.id}`);
            }
          })
          .catch((err) => {
            console.log(err);
            window.alert("게시글 등록에 실패했습니다");
          });
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
    console.log({ postForm, positions, imgSrc, tags });
  }, [postForm, positions, imgSrc, tags]);

  return (
    <Wrapper>
      <PageHead pageTitle="팀원 모집 글쓰기 | 사이드 이펙트" />
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
          <TagBox tags={tags} deleteTag={deleteTag} addTag={addTag} />
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
