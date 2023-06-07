import { Dispatch, SetStateAction } from "react";

export const translateCareer = (
  career: string, // 데이터로 부터 받는 career 값
  setCareerTitle: Dispatch<SetStateAction<string>>, // 화면에 보여줄 번역된 career 값
) => {
  if (career === "empty") {
    setCareerTitle("취업준비생");
  } else if (career === "new") {
    setCareerTitle("신입(0년차)");
  } else if (career === "junior") {
    setCareerTitle("주니어(1~3년차)");
  } else if (career === "middle") {
    setCareerTitle("미들(4~6년차)");
  } else if (career === "senior") {
    setCareerTitle("시니어(7년이상)");
  } else {
    setCareerTitle("경력");
  }
};

export const translatePosition = (
  position: string, // 데이터로 부터 받는 position 값
  setPositionTitle: Dispatch<SetStateAction<string>>, // 화면에 보여줄 번역된 position 값
) => {
  if (position === "FRONTEND") {
    setPositionTitle("프론트엔드");
  } else if (position === "BACKEND") {
    setPositionTitle("백엔드");
  } else if (position === "DESIGNER") {
    setPositionTitle("디자이너");
  } else if (position === "DEVOPS") {
    setPositionTitle("데브옵스");
  } else if (position === "MARKETER") {
    setPositionTitle("마케터");
  } else if (position === "PM") {
    setPositionTitle("기획자");
  } else {
    setPositionTitle("포지션");
  }
};

export const translateStatus = (
  status: string,
  setStatusTitle: Dispatch<SetStateAction<string>>,
) => {
  if (status === "PENDING") {
    setStatusTitle("지원취소");
  } else if (status === "APPROVED") {
    setStatusTitle("•참여");
  } else if (status === "REJECTED") {
    setStatusTitle("•방출");
  }
};
export const handleCareerTranslate = (career: string) => {
  if (career === "empty") {
    return "취업준비생";
  }
  if (career === "new") {
    return "신입(0년차)";
  }
  if (career === "junior") {
    return "주니어(1~3년차)";
  }
  if (career === "middle") {
    return "미들(4~6년차)";
  }
  if (career === "senior") {
    return "시니어(7년이상)";
  }
};
