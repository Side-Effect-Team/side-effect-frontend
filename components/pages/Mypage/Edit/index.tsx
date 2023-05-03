import { DataProps } from "..";
import Button from "../../../Button";
import Info from "../../../MypageEdit/Info";
import Introduction from "../../../MypageEdit/Introduction";
import Skill from "../../../MypageEdit/Skill";
import {
  Border,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
  Wrapper,
  ButtonWrapper,
} from "../styled";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface MyPageEditProps {
  data?: DataProps;
}
export interface FormData {
  github?: string;
  blog?: string;
  portfolio?: string;
  nickname?: string;
}

export default function MyPageEditPage(p: MyPageEditProps) {
  const [introduction, setIntroduction] = useState(p.data?.introduction);
  const [imageUrl, setImageUrl] = useState(p.data?.avatarSrc);
  const [skillTags, setSkillTags] = useState<string[]>(p.data?.skill || []);
  const [career, setCareer] = useState<string | number>(p.data?.career || "");
  const [position, setPosition] = useState<string | number>(
    p.data?.position || "",
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
        <Introduction
          nickname={p.data?.nickname}
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
          <Skill skillTags={skillTags} setSkillTags={setSkillTags} />
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Info</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <Info
            data={p.data}
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
