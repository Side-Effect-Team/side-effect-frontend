import SectionBorder from "components/Boarder/SectionBorder";
import { ButtonWrapper, SectionWrapper } from "../mypage/styled";
import IntroductionEdit from "./Introduction";
import SkillEdit from "./Skill";
import InfoEdit from "./Info";
import Button from "components/Button";
import useToast from "hooks/common/useToast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useEditProfile } from "hooks/mutations/useEditProfile";
import { useInputImage } from "hooks/common/useInputImage";
import { ChangeProps, updateData } from "utils/updateData";
import { compareData } from "utils/compareData";
import { MypageEditProps } from "pages/mypage/profileEdit";
export interface FormData {
  nickname: string;
}

export default function MypageEdit({ data }: MypageEditProps) {
  console.log("MypageEdit");

  const { addToast } = useToast();
  const router = useRouter();
  const [avatarBasic, setAvatarBasic] = useState(false);
  const [introduction, setIntroduction] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [career, setCareer] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [url, setUrl] = useState({
    githubUrl: "",
    blogUrl: "",
    portfolioUrl: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ nickname: string }>();

  const editMutate = useEditProfile();

  const { imgSrc, setImgSrc, handleImgChange, uploadImg } = useInputImage(
    data?.imgUrl
      ? `${process.env.NEXT_PUBLIC_API_URL}/user/image/${data?.imgUrl}`
      : data?.imgUrl,
  );

  const onClickEditCancel = () => {
    const response = confirm("변경사항은 저장되지 않습니다.");
    if (!response) return;
    addToast({
      type: "info",
      title: "편집 취소!",
      content: "프로필 편집을 취소하셨습니다.",
    });
    router.push("/mypage");
  };

  const onClickEdit = (p: FormData) => {
    const changedFormData: FormData = { nickname: data.nickname };
    if (p.nickname) changedFormData.nickname = p.nickname;

    const changedData: ChangeProps = {
      career,
      position,
      tags,
      introduction,
      ...url,
      ...changedFormData,
    };
    const changes: ChangeProps = compareData(data, changedData);
    console.log(changes);
    updateData(
      changes,
      avatarBasic,
      imgSrc,
      uploadImg,
      editMutate,
      `user/image`,
    );
    if (
      Object.keys(changes).length !== 0 ||
      !(imgSrc === null || imgSrc.startsWith("http"))
    )
      setTimeout(() => {
        router.push("/mypage");
      }, 300); // 데이터가 반영된 후 페이지 이동
  };

  useEffect(() => {
    setIntroduction(data?.introduction);
    setTags(data?.tags);
    setCareer(data?.career);
    setPosition(data?.position);
    setUrl({
      githubUrl: data?.githubUrl,
      blogUrl: data?.blogUrl,
      portfolioUrl: data?.portfolioUrl,
    });
  }, [data]);
  return (
    <form onSubmit={handleSubmit(onClickEdit)}>
      <IntroductionEdit
        setAvatarBasic={setAvatarBasic}
        nickname={data?.nickname}
        introduction={introduction}
        setIntroduction={setIntroduction}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        handleImgChange={handleImgChange}
        register={register}
        errors={errors}
      />
      <SectionWrapper>
        <SectionBorder title="Skill" />
        <SkillEdit stacks={tags} setStacks={setTags} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionBorder title="Info" />
        <InfoEdit
          career={career}
          setCareer={setCareer}
          position={position}
          setPosition={setPosition}
          url={url}
          setUrl={setUrl}
        />
      </SectionWrapper>
      <ButtonWrapper>
        <Button fill="false" type="button" onClick={onClickEditCancel}>
          수정 취소
        </Button>
        <Button>수정 완료</Button>
      </ButtonWrapper>
    </form>
  );
}
