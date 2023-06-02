import Tag from "..";
import { TagContainer, TagTitle, TagWrapper } from "./styled";
interface TagArrayProps {
  tagArray: string[];
  title: string;
  fill?: string;
  fontSize?: string;
}
export default function TagBox({
  title,
  tagArray,
  fill,
  fontSize,
}: TagArrayProps) {
  return (
    <TagContainer>
      <TagTitle>{title}</TagTitle>
      <TagWrapper>
        {tagArray.map((el, index) => (
          <Tag key={index} fill={fill} fontSize={fontSize}>
            {el}{" "}
          </Tag>
        ))}
      </TagWrapper>
    </TagContainer>
  );
}
