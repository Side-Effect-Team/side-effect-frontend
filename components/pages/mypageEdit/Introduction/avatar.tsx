import Button from "@/components/Button";
import { ProfileImage, ProfileImageWrapper } from "./styled";
import { ChangeEvent, useRef } from "react";

interface ProfileImageProps {
  imgSrc: string;
  handleImgChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function Avatar({ imgSrc, handleImgChange }: ProfileImageProps) {
  // 임시 사진 변경 로직
  const fileRef = useRef<HTMLInputElement>(null);
  const onClickChangeImage = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  return (
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
  );
}
