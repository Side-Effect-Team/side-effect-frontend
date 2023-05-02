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
  Text,
  Wrapper,
  ButtonWrapper,
} from "../Detail/styled";
import {
  GuideText,
  InputGuideWrapper,
  Input,
  ProfileContentsWrapper,
  ProfileImageWrapper,
  ProfileWrapper,
  TextArea,
  TagWrapper,
  DeleteTag,
  TagInput,
  Tag,
} from "./styled";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
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
  const [imageUrl, srtImageUrl] = useState(p.data?.avatarSrc);
  const onClickChangeImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    // 임시 사진 변경 로직
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        srtImageUrl(e.target?.result);
      }
    };
  };
  const fileRef = useRef<HTMLInputElement>(null);
  const { register, handleSubmit } = useForm<FormData>();

  const onClickEdit = (data: FormData) => {
    console.log(data);
    console.log(tagArr);
    console.log(introduction);
  };
  const [introduction, setIntroduction] = useState(p.data?.introduction);
  const onChangeIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
  };
  // 태그만드는 로직
  const [tag, setTag] = useState("");
  const [tagArr, setTagArr] = useState<string[]>(p.data?.skill || []);
  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setTag(e.target.value);
  };
  const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length !== 0 && e.key === "Enter") {
      e.preventDefault();
      submitTagItem();
    }
  };
  const submitTagItem = () => {
    let updatedTagList = [...tagArr];
    updatedTagList.push(tag);
    setTagArr(updatedTagList);
    setTag("");
  };
  const onClickDeleteTag = (el: string) => {
    const deleteTag = el;
    const filteredTag = tagArr.filter((tag) => tag !== deleteTag);
    setTagArr(filteredTag);
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onClickEdit)}>
        <ProfileWrapper>
          <ProfileImageWrapper>
            <ProfileImage src={imageUrl || "/img/BoardDefaultBackground.png"} />
            <Button type="button" onClick={onClickChangeImage}>
              사진변경
            </Button>
            <input
              ref={fileRef}
              type="file"
              style={{ display: "none" }}
              onChange={onChangeImage}
            />
          </ProfileImageWrapper>
          <ProfileContentsWrapper>
            <NickName>{p.data?.nickname || ""}</NickName>
            <TextArea
              defaultValue={p.data?.introduction || ""}
              onChange={onChangeIntroduction}
              placeholder={"소개를 적어주세요"}
              maxLength={50}
              // {...register("introduction")}
            />
            <InputGuideWrapper>
              <GuideText>
                팀원들에게 본인을 소개할 간단한 인사말을 적어주세요.
              </GuideText>
              <GuideText>{introduction && introduction.length}/50</GuideText>
            </InputGuideWrapper>
          </ProfileContentsWrapper>
        </ProfileWrapper>
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Skill</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <TagWrapper>
            {(tagArr &&
              tagArr.map((el, index) => (
                <Tag key={index}>
                  {el}{" "}
                  <DeleteTag type="button" onClick={() => onClickDeleteTag(el)}>
                    X
                  </DeleteTag>
                </Tag>
              ))) || <Text>아직 작성된 정보가 없습니다.</Text>}
            <TagInput
              type="text"
              placeholder="태그를 입력해주세요"
              onChange={onChangeTag}
              onKeyPress={onKeyPress}
              value={tag}
            />
          </TagWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <SectionHeaderWrapper>
            <SectionTitle>Info</SectionTitle>
            <Border></Border>
          </SectionHeaderWrapper>
          <InfoWrapper>
            <InfoTitle>*포지션</InfoTitle>
            <Input
              defaultValue={p.data?.position || ""}
              placeholder="정보를 등록해주세요"
              {...register("position")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>*경력</InfoTitle>
            <Input
              defaultValue={p.data?.career || ""}
              placeholder="정보를 등록해주세요"
              {...register("career")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>깃허브</InfoTitle>
            <Input
              defaultValue={p.data?.github || ""}
              placeholder="정보를 등록해주세요"
              {...register("github")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>블로그</InfoTitle>
            <Input
              defaultValue={p.data?.blog || ""}
              placeholder="정보를 등록해주세요"
              {...register("blog")}
            />
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>포트폴리오</InfoTitle>
            <Input
              defaultValue={p.data?.portfolio || ""}
              placeholder="정보를 등록해주세요"
              {...register("portfolio")}
            />
          </InfoWrapper>
        </SectionWrapper>
        <ButtonWrapper>
          <Button>프로필 수정하기</Button>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
}
