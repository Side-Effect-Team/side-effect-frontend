import { useEffect, useState } from "react";
import Button from "../../../components/Button";
import InfoEdit from "../../../components/pages/mypageEdit/Info";
import IntroductionEdit from "../../../components/pages/mypageEdit/Introduction";
import SkillEdit from "../../../components/pages/mypageEdit/Skill";
import { useForm } from "react-hook-form";
import {
  Border,
  ButtonWrapper,
  Container,
  ContentsWrapper,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
  TapMenu,
  TapWrapper,
} from "@/components/pages/mypage/styled";
import { MypageProps } from "..";
import { useRouter } from "next/router";
import axios from "axios";
import useToast from "@/hooks/useToast";

export interface FormData {
  githubUrl?: string;
  blogUrl?: string;
  portfolioUrl?: string;
  nickname: string;
}
export interface MypageEditProps {
  imgUrl: string | undefined;
  nickname: string;
  introduction: string | undefined;
  stacks: string[] | undefined;
  position: string;
  career: string;
  githubUrl?: string | undefined;
  blogUrl?: string | undefined;
  portfolioUrl?: string | undefined;
}
export default function MyPageEdit() {
  const [data, setData] = useState<MypageEditProps | null>(null);
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
  const { addToast, deleteToast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const result = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/editpage`,
          config,
        );
        console.log(result.data);
        setData(result.data);
      } catch (error) {
        router.push("/");
        setData(null);
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setStacks(data?.stacks || []);
    setCareer(data?.career || "");
    setPosition(data?.position || "");
    setIntroduction(data?.introduction);
  }, [data]);

  const onClickEdit = async (p: FormData) => {
    const changedFormData: FormData = { nickname: p.nickname };
    if (p.githubUrl) changedFormData.githubUrl = p.githubUrl;
    if (p.blogUrl) changedFormData.blogUrl = p.blogUrl;
    if (p.portfolioUrl) changedFormData.portfolioUrl = p.portfolioUrl;
    const changedData: MypageEditProps = {
      career,
      position,
      stacks,
      introduction,
      imgUrl,
      ...changedFormData,
    };
    if (data) {
      const changes = compareData(data, changedData);
      console.log(changes);
      if (Object.keys(changes).length === 0) {
        alert("변경사항이 없습니다.");
        return;
      }

      try {
        const id = localStorage.getItem("id");
        const token = localStorage.getItem("accessToken");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        const result = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`,
          changes,
          config,
        );
        console.log(result.data);
        addToast({
          type: "success",
          title: "success",
          content: "프로필 편집에 성공하였습니다.",
        });
        deleteToast("unique-id");
        router.push(`/mypage`);
      } catch (error) {
        console.log(error);
        addToast({
          type: "error",
          title: "error",
          content: "프로필 편집에 실패하였습니다.",
        });

        deleteToast("unique-id");
      }
    }
  };

  // 기존 데이터와 변경된 데이터 비교
  const compareData = (originData: MypageProps, changedData: MypageProps) => {
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
  };

  const onCliCkEditCancel = () => {
    alert("변경사항은 저장되지 않습니다.");
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
            <Button fill="false" type="button" onClick={onCliCkEditCancel}>
              수정 취소
            </Button>
            <Button>수정 완료</Button>
          </ButtonWrapper>
        </form>
      </ContentsWrapper>
    </Container>
  );
}
