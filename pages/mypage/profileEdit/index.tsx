import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import InfoEdit from "../../../components/pages/mypageEdit/Info";
import IntroductionEdit from "../../../components/pages/mypageEdit/Introduction";
import SkillEdit from "../../../components/pages/mypageEdit/Skill";
import { useForm } from "react-hook-form";
import {
  ButtonWrapper,
  Container,
  ContentsWrapper,
  SectionWrapper,
  TapMenu,
  TapWrapper,
} from "@/components/pages/mypage/styled";
import { useRouter } from "next/router";
import useToast from "@/hooks/common/useToast";
import { useGetProfileData } from "@/hooks/queries/useGetPofileData";
import { useEditProfile } from "@/hooks/mutations/useEditProfile";
import { useInputImage } from "@/hooks/common/useInputImage";
import { useQueryClient } from "@tanstack/react-query";
import { compareData } from "@/utils/compareData";
import SectionBorder from "@/components/Boarder/SectionBorder";
export interface FormData {
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
  nickname: string;
}
export interface MypageEditProps {
  nickname: string;
  introduction: string;
  tags: string[];
  position: string;
  career: string;
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
}
export default function MyPageEdit() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["editProfile"] });

  const data = useGetProfileData();
  // console.log(data);
  const router = useRouter();
  const [introduction, setIntroduction] = useState(data?.introduction);
  const [tags, setTags] = useState<string[]>(data?.tags);
  const [career, setCareer] = useState<string>(data?.career);
  const [position, setPosition] = useState<string>(data?.position);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const { addToast, deleteToast } = useToast();

  useEffect(() => {
    setTags(data?.tags);
    setCareer(data?.career);
    setPosition(data?.position);
    setIntroduction(data?.introduction);
  }, [data]);

  const editMutate = useEditProfile();

  const { imgSrc, handleImgChange, uploadImg } = useInputImage(
    data?.imgUrl
      ? `${process.env.NEXT_PUBLIC_API_URL}/user/image/${data?.imgUrl}`
      : data?.imgUrl,
  );

  const onClickEdit = async (p: FormData) => {
    if (data) {
      const changedFormData: FormData = { nickname: data.nickname };
      if (p.nickname) changedFormData.nickname = p.nickname;
      if (p.githubUrl) changedFormData.githubUrl = p.githubUrl;
      if (p.blogUrl) changedFormData.blogUrl = p.blogUrl;
      if (p.portfolioUrl) changedFormData.portfolioUrl = p.portfolioUrl;

      const changedData: MypageEditProps = {
        career,
        position,
        tags,
        introduction,
        ...changedFormData,
      };
      const changes = compareData(data, changedData);
      console.log(changes);
      if (
        Object.keys(changes).length === 0 &&
        (imgSrc === null || imgSrc.startsWith("http"))
      ) {
        alert("변경사항이 없습니다.");
        return;
      } else if (
        Object.keys(changes).length !== 0 &&
        (imgSrc === null || imgSrc.startsWith("http"))
      ) {
        editMutate(changes);
      } else if (
        Object.keys(changes).length === 0 &&
        !(imgSrc === null || imgSrc.startsWith("http"))
      ) {
        await uploadImg(`${process.env.NEXT_PUBLIC_API_URL}/user/image`);
      } else {
        await uploadImg(`${process.env.NEXT_PUBLIC_API_URL}/user/image`);
        editMutate(changes);
      }
      setTimeout(() => {
        router.push("/mypage");
      }, 300); // 데이터가 반영된 후 페이지 이동
    }
  };

  const onClickEditCancel = () => {
    const response = confirm("변경사항은 저장되지 않습니다.");
    if (!response) return;
    addToast({
      type: "info",
      title: "info",
      content: "프로필 편집을 취소하셨습니다.",
    });

    deleteToast("unique-id");
    router.push("/mypage");
  };
  return (
    <Container>
      <TapWrapper>
        <TapMenu isActive>프로필 수정</TapMenu>
      </TapWrapper>
      <ContentsWrapper>
        <form onSubmit={handleSubmit(onClickEdit)}>
          <IntroductionEdit
            nickname={data?.nickname}
            introduction={introduction}
            setIntroduction={setIntroduction}
            imgSrc={imgSrc}
            handleImgChange={handleImgChange}
            introRegister={register}
            errors={errors}
          />
          <SectionWrapper>
            <SectionBorder title="Skill" />
            <SkillEdit stacks={tags} setStacks={setTags} />
          </SectionWrapper>
          <SectionWrapper>
            <SectionBorder title="Info" />
            <InfoEdit
              githubUrl={data?.githubUrl}
              blogUrl={data?.blogUrl}
              portfolioUrl={data?.portfolioUrl}
              career={career}
              setCareer={setCareer}
              position={position}
              setPosition={setPosition}
              infoRegister={register}
            />
          </SectionWrapper>
          <ButtonWrapper>
            <Button fill="false" type="button" onClick={onClickEditCancel}>
              수정 취소
            </Button>
            <Button>수정 완료</Button>
          </ButtonWrapper>
        </form>
      </ContentsWrapper>
    </Container>
  );
}
