import { Tag, TagWrapper, Text } from "./styled";

interface SkillProps {
  tags: string[] | undefined;
}

export default function Skill({ tags }: SkillProps) {
  return (
    <TagWrapper>
      {(tags && tags.map((el, index) => <Tag key={index}>{el}</Tag>)) || (
        <Text>아직 작성된 정보가 없습니다.</Text>
      )}
    </TagWrapper>
  );
}
