import Button from "../../../Button";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
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
import { FormData } from "../../../../pages/mypage/edit";

interface IntroEditProps {
  nickname: string | undefined;
  introduction: string | undefined;
  setIntroduction: Dispatch<SetStateAction<string>>;
  imageUrl: string | undefined;
  setImageUrl: Dispatch<SetStateAction<string>>;
  IntroRegister: UseFormRegister<Pick<FormData, "nickname">>;
  errors: FieldErrors<Pick<FormData, "nickname">>;
}
export default function IntroductionEdit(p: IntroEditProps) {
  // 자기소개
  const onChangeIntroduction = (e: ChangeEvent<HTMLTextAreaElement>) => {
    p.setIntroduction(e.target.value);
  };
  // 임시 사진 변경 로직
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickChangeImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };
  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        p.setImageUrl(e.target?.result);
      }
    };
  };

  return (
    <>
      <ProfileWrapper>
        <ProfileImageWrapper>
          <ProfileImage
            src={p.imageUrl || "/images/BoardDefaultBackground.png"}
          />
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
          <IntroductionWrapper>
            <IntroductionTitle>닉네임:</IntroductionTitle>
            <FiledWrapper>
              <Input
                placeholder="닉네임을 적어주세요"
                defaultValue={p.nickname}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
                {...p.IntroRegister("nickname", {
                  required: "닉네임을 작성해주세요",
                  minLength: {
                    value: 2,
                    message: "닉네임은 2글자 이상 입력해주세요",
                  },
                  maxLength: {
                    value: 15,
                    message: "닉네임은 15글자 이하로 입력해주세요",
                  },
                })}
              />
              {p.errors.nickname && (
                <ErrorMessage>{p.errors.nickname.message}</ErrorMessage>
              )}
            </FiledWrapper>
          </IntroductionWrapper>
          <IntroductionWrapper>
            <IntroductionTitle>소개:</IntroductionTitle>
            <FiledWrapper>
              <TextArea
                defaultValue={p.introduction || ""}
                onChange={onChangeIntroduction}
                placeholder={"소개를 적어주세요"}
                maxLength={50}
              />
              <InputGuideWrapper>
                <GuideText>
                  팀원들에게 본인을 소개할 간단한 인사말을 적어주세요.
                </GuideText>
                <GuideText>
                  {p.introduction && p.introduction.length}/50
                </GuideText>
              </InputGuideWrapper>
            </FiledWrapper>
          </IntroductionWrapper>
        </ProfileContentsWrapper>
      </ProfileWrapper>
    </>
  );
}