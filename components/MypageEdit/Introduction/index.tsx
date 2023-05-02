import Button from "../../Button";
import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import {
  GuideText,
  InputGuideWrapper,
  NickName,
  ProfileContentsWrapper,
  ProfileImage,
  ProfileImageWrapper,
  ProfileWrapper,
  TextArea,
} from "./styled";

interface MyPageDetailProps {
  nickname: string | undefined;
  introduction: string | undefined;
  setIntroduction: Dispatch<SetStateAction<string | undefined>>;
  imageUrl: string | undefined;
  setImageUrl: Dispatch<SetStateAction<string | undefined>>;
}
export default function Introduction(p: MyPageDetailProps) {
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
          <NickName>{p.nickname || ""}</NickName>
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
            <GuideText>{p.introduction && p.introduction.length}/50</GuideText>
          </InputGuideWrapper>
        </ProfileContentsWrapper>
      </ProfileWrapper>
    </>
  );
}
