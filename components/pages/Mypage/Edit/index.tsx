import { ButtonsWrapper } from "../../../BoardCard/styled";
import Button from "../../../Button";
import {
  Border,
  InfoTitle,
  InfoWrapper,
  NickName,
  ProfileImage,
  SectionHeaderWrapper,
  SectionTitle,
  SectionWrapper,
  Tag,
  TagWrapper,
  Text,
  Wrapper,
} from "../Detail/styled";
import {
  GuideText,
  InputGuideWrapper,
  InputTemp,
  ProfileContentsWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
} from "./styled";
import { useRef } from "react";
import { useForm } from "react-hook-form";

interface DataProps {
  avatarSrc?: string;
  nickname: string;
  introduction?: string;
  boards: number;
  follower: number;
  following: number;
  skill?: string[];
  position: string;
  career: string;
  github: string;
  blog: string;
  portfolio: string;
  [key: string]: any;
}

interface MyPageDetailProps {
  data?: DataProps;
}
interface FormData {
  introduction: string;
  position: string;
  career: string;
  github: string;
  blog: string;
  portfolio: string;
}

export default function MyPageEditPage(p: MyPageDetailProps) {
  const onClickChangeImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  const fileRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit } = useForm<FormData>();

  const onClickEdit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onClickEdit)}>
        <ProfileWrapper>
          <ProfileImageWrapper>
            <ProfileImage
              src={p.data?.avatarSrc || "/img/BoardDefaultBackground.png"}
            />
            <Button type="button" onClick={onClickChangeImage}>
              사진변경
            </Button>
            <input ref={fileRef} type="file" style={{ display: "none" }} />
          </ProfileImageWrapper>
          <ProfileContentsWrapper>
            <NickName>{p.data?.nickname || ""}</NickName>
            <InputTemp
              type="text"
              defaultValue={p.data?.introduction || ""}
              placeholder={"소개를 적어주세요"}
              maxLength={50}
              {...register("introduction")}
            />
            <InputGuideWrapper>
              <GuideText>
                팀원들에게 본인을 소개할 간단한 인사말을 적어주세요.
              </GuideText>
              <GuideText>
                {p.data?.introduction && p.data?.introduction.length}/50
              </GuideText>
            </InputGuideWrapper>
          </ProfileContentsWrapper>
        </ProfileWrapper>
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Skill</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <TagWrapper>
            {p.data?.skill?.map((el, index) => <Tag key={index}>{el}</Tag>) || (
              <Text>아직 작성된 정보가 없습니다.</Text>
            )}
          </TagWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Info</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <InfoWrapper>
            <InfoTitle>*포지션</InfoTitle>
            <InputTemp
              defaultValue={p.data?.position || ""}
              placeholder="정보를 등록해주세요"
              {...register("position")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>*경력</InfoTitle>
            <InputTemp
              defaultValue={p.data?.career || ""}
              placeholder="정보를 등록해주세요"
              {...register("career")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>깃허브</InfoTitle>
            <InputTemp
              defaultValue={p.data?.github || ""}
              placeholder="정보를 등록해주세요"
              {...register("github")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>블로그</InfoTitle>
            <InputTemp
              defaultValue={p.data?.blog || ""}
              placeholder="정보를 등록해주세요"
              {...register("blog")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>포트폴리오</InfoTitle>
            <InputTemp
              defaultValue={p.data?.portfolio || ""}
              placeholder="정보를 등록해주세요"
              {...register("portfolio")}
            />
          </InfoWrapper>
        </SectionWrapper>
        <ButtonsWrapper>
          <Button>프로필 수정하기</Button>
        </ButtonsWrapper>
      </form>
    </Wrapper>
  );
}
