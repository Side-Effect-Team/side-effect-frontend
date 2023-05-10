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
  // Wrapper,
} from "@/components/pages/mypage/styled";
import { MypageProps } from "..";
import { useRouter } from "next/router";
import { Wrapper } from "@/components/pages/mypageEdit/styled";

export interface FormData {
  github?: string;
  blog?: string;
  portfolio?: string;
  nickname?: string;
}

const data: MypageProps = {
  imgUrl: "/images/ProjectDefaultBackground.png",
  nickname: "자라는개발자",
  email: "sideeffect@naver.com",
  introduction:
    "프론트엔드 개발자를 꿈꾸는 취준생입니다. 프로젝트 경험하고 싶어요",
  // boards: 1,
  // follower: 20,
  // following: 30,
  stacks: ["typescript", "react", "HTML", "Next.js", "React.native"],
  position: "프론트엔드",
  career: "1~3",
  githubUrl: "https://github.com",
  blogUrl: "https://www.naver.com",
  portfolioUrl: "https://www.naver.com",
};

export default function MyPageEdit() {
  const router = useRouter();
  const [introduction, setIntroduction] = useState(data?.introduction);
  const [imgUrl, setImgUrl] = useState(data?.imgUrl);
  const [stackTags, setStackTags] = useState<string[]>(data?.stacks || []);
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
      stackTags,
      introduction,
      imgUrl,
      ...data,
    });
  };
  const onCliCkEditDone = () => {
    alert("변경완료");
    router.push("/mypage");
  };
  const onCliCkEditCancle = () => {
    alert("변경사항은 저장되지 않습니다.");
    router.push("/mypage");
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onClickEdit)}>
        <IntroductionEdit
          nickname={data.nickname}
          introduction={introduction}
          setIntroduction={setIntroduction}
          imgUrl={imgUrl}
          setImgUrl={setImgUrl}
          introRegister={register}
          errors={errors}
        />
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Skill</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <SkillEdit stackTags={stackTags} setStackTags={setStackTags} />
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Info</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <InfoEdit
            githubUrl={data.githubUrl}
            blogUrl={data.blogUrl}
            portfolioUrl={data.portfolioUrl}
            career={career}
            setCareer={setCareer}
            position={position}
            setPosition={setPosition}
            infoRegister={register}
          />
        </SectionWrapper>
        <ButtonWrapper>
          <Button fill="false" type="button" onClick={onCliCkEditCancle}>
            수정취소
          </Button>
          <Button onClick={onCliCkEditDone}>수정 완료</Button>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}
