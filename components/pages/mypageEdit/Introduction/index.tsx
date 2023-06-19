import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { ProfileContentsWrapper, ProfileWrapper } from "./styled";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import Avatar from "./avatar";
import Nickname from "./nickname";
import Introduction from "./introduction";

interface IntroEditProps {
  setAvatarBasic: Dispatch<SetStateAction<boolean>>;
  nickname: string;
  introduction: string;
  setIntroduction: Dispatch<SetStateAction<string>>;
  imgSrc: string;
  setImgSrc: Dispatch<SetStateAction<string>>;
  handleImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
  register: UseFormRegister<{ nickname: string }>;
  errors: FieldErrors<{ nickname: string }>;
}
export default function IntroductionEdit({
  setAvatarBasic,
  nickname,
  introduction,
  setIntroduction,
  imgSrc,
  setImgSrc,
  handleImgChange,
  register,
  errors,
}: IntroEditProps) {
  return (
    <ProfileWrapper>
      <Avatar
        setAvatarBasic={setAvatarBasic}
        imgSrc={imgSrc}
        setImgSrc={setImgSrc}
        handleImgChange={handleImgChange}
      />
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
