import { TagProps, TagWrapper } from "./styled";

export default function Tag({ children, ...rest }: TagProps): JSX.Element {
  return <TagWrapper {...rest}>{children}</TagWrapper>;
}

// 사용하는법
// <Tag color="#d9d9d9" fill="false" fontSize="15px">

// <Tag> 디폴트 값 참조
// TagWrapper.defaultProps = {
//   fill: "true",
//   color: theme.brandColor.primary,
//   fontSize: "16px",
// };
