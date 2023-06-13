import { LoadingWrapper } from "./styled";
import { theme } from "styles/Theme";
import ScaleLoader from "react-spinners/ScaleLoader";

interface LoadingSizeType {
  width: number;
  height: number;
}

export default function Loading({ width, height }: LoadingSizeType) {
  return (
    <LoadingWrapper>
      <ScaleLoader
        width={width}
        height={height}
        color={`${theme.brandColor.primary}`}
      />
    </LoadingWrapper>
  );
}
