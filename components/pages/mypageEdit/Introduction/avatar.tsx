import Button from "components/Button";
import { ButtonWrapper, ProfileImage, ProfileImageWrapper } from "./styled";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

interface ProfileImageProps {
  setAvatarBasic: Dispatch<SetStateAction<boolean>>;
  imgSrc: string;
  setImgSrc: Dispatch<SetStateAction<string>>;
  handleImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Avatar({
  setAvatarBasic,
  imgSrc,
  setImgSrc,
  handleImgChange,
}: ProfileImageProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickChangeImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
    setAvatarBasic(false);
  };
  const onClickRemoveImage = async () => {
    setAvatarBasic(true);
    setImgSrc("/images/mypageDefaultImage.png");
  };

  return (
    <ProfileImageWrapper>
      <ProfileImage
        src={imgSrc ? imgSrc : "/images/mypageDefaultImage.png"}
        alt="프로필 이미지"
      />
      <ButtonWrapper>
        <Button type="button" fill="false" onClick={onClickRemoveImage}>
          기본이미지
        </Button>
        <Button type="button" onClick={onClickChangeImage}>
          사진변경
        </Button>
      </ButtonWrapper>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImgChange}
      />
    </ProfileImageWrapper>
  );
}
