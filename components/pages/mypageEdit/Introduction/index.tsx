import { ChangeEvent, Dispatch, SetStateAction, useEffect } from "react";
import { ProfileContentsWrapper, ProfileWrapper } from "./styled";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Avatar from "./avatar";
import Nickname from "./nickname";
import Introduction from "./introduction";

interface IntroEditProps {
  nickname: string;
  introduction: string;
  setIntroduction: Dispatch<SetStateAction<string>>;
  imgSrc: string;
  handleImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<{ nickname: string }>;
  errors: FieldErrors<{ nickname: string }>;
}
export default function IntroductionEdit({
  nickname,
  introduction,
  setIntroduction,
  imgSrc,
  handleImgChange,
  register,
  errors,
}: IntroEditProps) {
  return (
    <ProfileWrapper>
      <Avatar imgSrc={imgSrc} handleImgChange={handleImgChange} />
      <ProfileContentsWrapper>
        <Nickname nickname={nickname} register={register} errors={errors} />
        <Introduction
          introduction={introduction}
          setIntroduction={setIntroduction}
        />
      </ProfileContentsWrapper>
    </ProfileWrapper>
  );
}
