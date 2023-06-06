import Button from "@/components//Button";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import {
  ErrorMessage,
  FiledWrapper,
  GuideText,
  InputGuideWrapper,
  IntroductionTitle,
  IntroductionWrapper,
  ProfileContentsWrapper,
  ProfileImage,
  ProfileImageWrapper,
  ProfileWrapper,
  TextArea,
} from "./styled";
import { Input } from "../Info/styled";
import { FieldErrors, UseFormRegister } from "react-hook-form";
// import { FormData } from "@/pages/mypage/profileEdit";
import { duplicateNickname } from "apis/UserAPI";

interface IntroEditProps {
  nickname: string;
  introduction: string;
  setIntroduction: Dispatch<SetStateAction<string>>;
  imgSrc: string;
  handleImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
  introRegister: UseFormRegister<{ nickname: string }>;
  errors: FieldErrors<{ nickname: string }>;
}
export default function IntroductionEdit({
  nickname,
  introduction,
  setIntroduction,
  imgSrc,
  handleImgChange,
  introRegister,
  errors,
}: IntroEditProps) {
  // 자기소개
  const onChangeIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
  };
  // 임시 사진 변경 로직
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickChangeImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  // 닉네임 값이 빈값으로 반환되는 문제 해결
  useEffect(() => {
    const inputElement = document.querySelector<HTMLInputElement>("#nickname");
    if (inputElement) {
      inputElement.focus();
    }
  }, []);
  return (
    <>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage
            src={imgSrc ? imgSrc : "/images/mypageDefaultImage.png"}
            alt="프로필 이미지"
          />
          <Button type="button" onClick={onClickChangeImage}>
            사진변경
          </Button>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImgChange}
          />
        </ProfileImageWrapper>
        <ProfileContentsWrapper>
          <IntroductionWrapper>
            <IntroductionTitle>닉네임:</IntroductionTitle>
            <FiledWrapper>
              <Input
                id="nickname"
                placeholder="닉네임을 적어주세요"
                defaultValue={nickname}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                {...introRegister("nickname", {
                  required: "닉네임을 작성해주세요",
                  minLength: {
                    value: 2,
                    message: "닉네임은 2글자 이상 입력해주세요",
                  },
                  maxLength: {
                    value: 15,
                    message: "닉네임은 15글자 이하로 입력해주세요",
                  },
                  validate: async (value) => {
                    if (value.trim().length === 0) {
                      return "닉네임을 작성해주세요";
                    }
                    if (
                      value !== nickname &&
                      (await duplicateNickname(value))
                    ) {
                      return "이미 존재하는 닉네임 입니다.";
                    }
                    return true;
                  },
                })}
              />
              {errors.nickname && (
                <ErrorMessage>{errors.nickname.message}</ErrorMessage>
              )}
            </FiledWrapper>
          </IntroductionWrapper>
          <IntroductionWrapper>
            <IntroductionTitle>소개:</IntroductionTitle>
            <FiledWrapper>
              <TextArea
                defaultValue={introduction || ""}
                onChange={onChangeIntroduction}
                placeholder={"소개를 적어주세요"}
                maxLength={50}
              />
              <InputGuideWrapper>
                <GuideText>
                  팀원들에게 본인을 소개할 간단한 인사말을 적어주세요.
                </GuideText>
                <GuideText>{introduction && introduction.length}/50</GuideText>
              </InputGuideWrapper>
            </FiledWrapper>
          </IntroductionWrapper>
        </ProfileContentsWrapper>
      </ProfileWrapper>
    </>
  );
}
