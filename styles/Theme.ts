import { sizes } from "./media";

export const theme = {
  colors: {
    primary: "#87A2FB",
    gray: "#98A2B3",
    lightGray: "#e9e9e9",
    danger: "#F04438",
    success: "#16B364",
    background: "#fff",
    white: "#fff",
    mediumGray: "#d9d9d9",
    darkGray: "#667085",
  },
  fonts: {
    pretendard: "Pretendard-Regular",
  },
  sizes: {
    mobile: sizes.mobile + "px",
    desktop: sizes.desktop + "px",
  },
  height: {
    header: "75px",
    mainCarousel: "500px",
    banner: "300px",
    batchCarousel: "550px",
    keywordBox: "200px",
  },
  width: {
    positionInput: "250px",
    needsInput: "45px",
  },
  // 추후 브랜드 컬러 추가 시 (아래는 임시 컬러)
  brandColor: {
    primary: "#87A2FB",
    coral: "#FF6D60",
    skyBlue: "#ECF2FF",
    lightGray: "#EAECF0",
    black: "#202225",
    darkGray: "#667085",
  },
  boxShadow: `inset 0 0 1px 1px hsla(0, 0%, 100%, 0.15),
0 0 0 1px hsla(0, 0%, 0%, 0.1),
0 1px 2px hsla(0, 0%, 0%, 0.05),
0 2px 4px hsla(0, 0%, 0%, 0.1),
0 6px 10px hsla(0, 0%, 0%, 0.2);`,
};

export const darkTheme = {
  ...theme,
  mainBackGround: "#202225",
  componentBgColor: "#35383F",
  hover: "#232323",
  textColor: "#ffffff",
  footerBgColor: "#35383F",
  alarmDefaultColor: "#d9d9d9",
  grayToDark: "#667085",
  cardBoxShadow: `
  0 0 0 1px hsla(0, 0%, 0%, 0.1),
  0 1px 2px hsla(0, 0%, 0%, 0.05),
  0 2px 4px hsla(0, 0%, 0%, 0.1),
  0 6px 10px hsla(0, 0%, 0%, 0.2);
  `,
  cardBorder: "none",
  mode: "dark",
  buttonTextColor: "#000000",
  landingPageColor: "#191a1c",
};
export const lightTheme = {
  ...theme,
  mainBackGround: "#ffffff",
  componentBgColor: "#ffffff",
  hover: "#eaecf0",
  textColor: "#000000",
  footerBgColor: "#d9d9d9",
  alarmDefaultColor: "#CDDEFF",
  grayToDark: "#d9d9d9",
  cardBoxShadow: "none",
  cardBorder: "#d9d9d9",
  mode: "light",
  buttonTextColor: "#ffffff",
  landingPageColor: "#f8f8f8",
};

export type BrandColorTypes = keyof typeof theme.brandColor;
export type ColorsType = typeof lightTheme.colors;
export type SizesType = typeof lightTheme.sizes;
export type HeightType = typeof lightTheme.height;
export type WidthType = typeof lightTheme.width;
export type BrandColorType = typeof lightTheme.brandColor;
