import { breakPoints } from "./Media";

export const theme = {
  colors: {
    primary: "#155EEF",
    gray: "#98A2B3",
    danger: "#F04438",
    success: "#16B364",
    background: "#fff",
    white: "#fff",
  },
  fonts: {
    pretendard: "Pretendard-Regular",
  },
  sizes: {
    mobile: breakPoints.mobile + "px",
    desktop: breakPoints.desktop + "px",
  },
  height: {
    header: "75px",
    mainCarousel: "500px",
    banner: "300px",
    batchCarousel: "550px",
  },
  width: {
    positionInput: "250px",
    needsInput: "45px",
  },
  // 추후 브랜드 컬러 추가 시 (아래는 임시 컬러)
  brandColor: {
    primary: "#155EEF",
    coral: "#FF6D60",
    skyBlue: "#CDDEFF",
    lightGray: "#EAECF0",
  },
};

export type BrandColorTypes = keyof typeof theme.brandColor;
