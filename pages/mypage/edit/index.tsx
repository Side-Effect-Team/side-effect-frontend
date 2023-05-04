import { useState } from "react";
import Button from "../../../components/Button";
import InfoEdit from "../../../components/pages/mypageEdit/Info";
import IntroductionEdit from "../../../components/pages/mypageEdit/Introduction";
import SkillEdit from "../../../components/pages/mypageEdit/Skill";
import { useForm } from "react-hook-form";
import {
  Border,
  ButtonWrapper,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
  Wrapper,
} from "@/components/pages/mypage/styled";

export interface FormData {
  github?: string;
  blog?: string;
  portfolio?: string;
  nickname?: string;
}

export default function MyPageEdit() {
  const data = {
    avatarSrc: "/images/ProjectDefaultBackground.png",
    nickname: "자라는개발자",
    introduction:
      "프론트엔드 개발자를 꿈꾸는 취준생입니다. 프로젝트 경험하고 싶어요",
    boards: 1,
    follower: 20,
    following: 30,
    skill: ["typescript", "react", "HTML", "Next.js", "React.native"],
    position: "프론트엔드",
    career: "0",
    github: "https://github.com",
    blog: "https://www.naver.com",
    portfolio: "https://www.naver.com",
  };

  const [introduction, setIntroduction] = useState(data?.introduction);
  const [imageUrl, setImageUrl] = useState(data?.avatarSrc);
  const [skillTags, setSkillTags] = useState<string[]>(data?.skill || []);
  const [career, setCareer] = useState<string | number>(data?.career || "");
  const [position, setPosition] = useState<string | number>(
    data?.position || "",
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onClickEdit = (data: FormData) => {
    console.log({
      career,
      position,
      skillTags,
      introduction,
      imageUrl,
      ...data,
    });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onClickEdit)}>
        <IntroductionEdit
          nickname={data.nickname}
          introduction={introduction}
          setIntroduction={setIntroduction}
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          IntroRegister={register}
          errors={errors}
        />
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Skill</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <SkillEdit skillTags={skillTags} setSkillTags={setSkillTags} />
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Info</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <InfoEdit
            data={data}
            career={career}
            setCareer={setCareer}
            position={position}
            setPosition={setPosition}
            InfoRegister={register}
          />
        </SectionWrapper>
        <ButtonWrapper>
          <Button>프로필 수정하기</Button>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}
