import axios from "axios";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
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
import { RECRUIT_POST_FORM } from "enum";
import { updateRecruitPost } from "apis/RecruitBoardAPI";

interface EditRecruitPageProps {
  recruit: RecruitType;
}

export default function EditRecruitPage({ recruit }: EditRecruitPageProps) {
  const router = useRouter();
  const { positions, addPosition, deletePosition, editPosition } =
    usePosition();
  const { postForm, errMsgs, touched, handleChange, handleBlur, handleSubmit } =
    useForm({
      initialVals: {
        projectName: recruit.projectName,
        title: recruit.title,
        content: recruit.content,
      },
      validate: (form: typeof RECRUIT_POST_FORM) => formValidator(form),
      onSubmit: () => updateRecruitPost(recruit, postForm, ["react"], router),
    });

  console.log(recruit);

  return (
    <Wrapper>
      <PageHead pageTitle="모집 게시글 수정하기 | 사이드 이펙트" />
      <Contents>
        <FormTitle title="팀원 모집 게시글 수정" />
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
            guideText=""
            positions={positions}
            addPosition={addPosition}
            deletePosition={deletePosition}
            editPosition={editPosition}
            isEdit
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

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const recruitId = ctx.params?.recruitId;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/${recruitId}`;

  try {
    const res = await axios.get(url);
    const recruit = await res.data;

    return {
      props: {
        recruit,
      },
    };
  } catch (err) {
    return { notFound: true };
  }
}
