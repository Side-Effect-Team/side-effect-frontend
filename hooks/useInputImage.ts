import { useState } from "react";

/**
 * defaultImgSrc : 디폴트 이미지 경로 (예: /images/default.png)
 * handleImgChange : image input 에 연결할 onChange 이벤트 핸들러
 * */
export const useInputImage = (defaultImgSrc: string) => {
  const [imgSrc, setImgSrc] = useState<string>(defaultImgSrc);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        setImgSrc(e.target?.result);
      }
    };
  };
  return { imgSrc, setImgSrc, handleImgChange };
};
