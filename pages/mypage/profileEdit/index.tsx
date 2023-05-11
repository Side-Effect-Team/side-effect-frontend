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
} from "@/components/pages/mypage/styled";
import { MypageProps } from "..";
import { useRouter } from "next/router";
import { Wrapper } from "@/components/pages/mypageEdit/styled";

export interface FormData {
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
  nickname: string;
}

const data: MypageProps = {
  imgUrl: "/images/ProjectDefaultBackground.png",
  nickname: "자라는개발자",
  email: "sideeffect@naver.com",
  introduction:
    "프론트엔드 개발자를 꿈꾸는 취준생입니다. 프로젝트 경험하고 싶어요",
  stacks: ["typescript", "react", "HTML", "Next.js", "React.native"],
  position: "frontend",
  career: "new",
  githubUrl: "https://github.com",
  blogUrl: "https://www.naver.com",
  portfolioUrl: "https://www.naver.com",
};

export default function MyPageEdit() {
  const router = useRouter();
  const [introduction, setIntroduction] = useState(data?.introduction);
  const [imgUrl, setImgUrl] = useState(data?.imgUrl);
  const [stacks, setStacks] = useState<string[]>(data?.stacks || []);
  const [career, setCareer] = useState<string>(data?.career || "");
  const [position, setPosition] = useState<string>(data?.position || "");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onClickEdit = (p: FormData) => {
    const changedData: MypageProps = {
      career,
      position,
      stacks,
      introduction,
      imgUrl,
      ...p,
    };
    const changes = compareData(data, changedData);
    console.log(changes);
    // alert("변경완료");
    // router.push("/mypage");
  };

  // 기존 데이터와 변경된 데이터 비교
  function compareData(originData: MypageProps, changedData: MypageProps) {
    const keys = Object.keys(originData);
    const changes: Partial<MypageProps> & Record<string, any> = {};
    for (const key of keys) {
      if (
        originData[key as keyof MypageProps] !==
        changedData[key as keyof MypageProps]
      ) {
        changes[key] = changedData[key as keyof MypageProps];
        if (changes[key] === undefined) {
          delete changes[key];
        }
      }
    }
    return changes;
  }

  const onCliCkEditCancel = () => {
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
          <SkillEdit stacks={stacks} setStacks={setStacks} />
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
          <Button fill="false" type="button" onClick={onCliCkEditCancel}>
            수정취소
          </Button>
          <Button>수정 완료</Button>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}
