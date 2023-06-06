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
import { ChangeProps, updateData } from "@/utils/updateData";
export interface FormData {
  nickname: string;
}

export default function MyPageEdit() {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries({ queryKey: ["editProfile"] });

  const data = useGetProfileData();
  const router = useRouter();
  const [introduction, setIntroduction] = useState<string>(data?.introduction);
  const [tags, setTags] = useState<string[]>(data?.tags);
  const [career, setCareer] = useState<string>(data?.career);
  const [position, setPosition] = useState<string>(data?.position);
  const [githubUrl, setGithubUrl] = useState<string>(data?.githubUrl);
  const [blogUrl, setBlogUrl] = useState<string>(data?.blogUrl);
  const [portfolioUrl, setPortfolioUrl] = useState<string>(data?.portfolioUrl);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ nickname: string }>();
  const { addToast, deleteToast } = useToast();

  const editMutate = useEditProfile();

  const { imgSrc, handleImgChange, uploadImg } = useInputImage(
    data?.imgUrl
      ? `${process.env.NEXT_PUBLIC_API_URL}/user/image/${data?.imgUrl}`
      : data?.imgUrl,
  );

  const onClickEdit = (p: FormData) => {
    if (data) {
      const changedFormData: FormData = { nickname: data.nickname };
      if (p.nickname) changedFormData.nickname = p.nickname;

      const changedData: ChangeProps = {
        career,
        position,
        tags,
        introduction,
        githubUrl,
        blogUrl,
        portfolioUrl,
        ...changedFormData,
      };
      const changes: ChangeProps = compareData(data, changedData);
      console.log(changes);
      updateData(changes, imgSrc, uploadImg, editMutate, `user/image`);
      if (
        Object.keys(changes).length !== 0 ||
        !(imgSrc === null || imgSrc.startsWith("http"))
      )
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
      title: "편집 취소!",
      content: "프로필 편집을 취소하셨습니다.",
    });

    deleteToast("unique-id");
    router.push("/mypage");
  };

  useEffect(() => {
    setIntroduction(data?.introduction);
    setTags(data?.tags);
    setCareer(data?.career);
    setPosition(data?.position);
    setGithubUrl(data?.githubUrl);
    setBlogUrl(data?.blogUrl);
    setPortfolioUrl(data?.portfolioUrl);
  }, [data]);
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
              setGithubUrl={setGithubUrl}
              blogUrl={data?.blogUrl}
              setBlogUrl={setBlogUrl}
              portfolioUrl={data?.portfolioUrl}
              setPortfolioUrl={setPortfolioUrl}
              career={career}
              setCareer={setCareer}
              position={position}
              setPosition={setPosition}
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
