import { DefaultTheme } from "styled-components";
import {
  ColorsType,
  SizesType,
  HeightType,
  WidthType,
  BrandColorType,
} from "@/styles/Theme";
declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsType;
    sizes: SizesType;
    height: HeightType;
    width: WidthType;
    brandColor: BrandColorType;
    mainBackGround: string;
    textColor: string;
    componentBgColor: stirng;
    hover: string;
    boxShadow: string;
    footerBgColor: string;
    alarmDefaultColor: string;
    grayToDark: string;
    cardBoxShadow: string;
    cardBorder: string;
    mode: string;
    buttonTextColor: string;
    landingPageColor: string;
  }
}
