import { Tag, TagWrapper, Text } from "./styled";

interface SkillProps {
  stacks: string[] | undefined;
}

export default function Skill({ stacks }: SkillProps) {
  return (
    <TagWrapper>
      {(stacks && stacks.map((el, index) => <Tag key={index}>{el}</Tag>)) || (
        <Text>아직 작성된 정보가 없습니다.</Text>
      )}
    </TagWrapper>
  );
}
