import { useEffect, useState } from "react";
import customAxios from "apis/customAxios";

export const useInputImage = (defaultImgSrc: string) => {
  const [imgFile, setImgFile] = useState<FormData | null>(null);
  const [imgSrc, setImgSrc] = useState<string>(defaultImgSrc);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    // 서버 전송용 이미지
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setImgFile(formData);
    // 미리보기 이미지
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files?.[0]!);
    fileReader.onload = (e) => {
      if (typeof e.target?.result === "string") {
        setImgSrc(e.target?.result);
      }
    };
  };

  useEffect(() => {
    setImgSrc(defaultImgSrc);
  }, [defaultImgSrc]);

  // 서버에 이미지 업로드하는 API
  const uploadImg = async (url: string) => {
    // 입력된 이미지가 없으면 전송 X
    if (!imgFile) return;
    try {
      const res = await customAxios.post(url, imgFile);
      return res.data;
    } catch (err) {
      console.log(err);
      window.alert("사진 등록에 실패했습니다");
    }
  };

  return { imgSrc, setImgSrc, handleImgChange, uploadImg };
};
