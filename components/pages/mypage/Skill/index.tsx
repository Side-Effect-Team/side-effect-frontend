import { Tag, TagWrapper, Text } from "./styled";

interface SkillProps {
  skill: string[] | undefined;
}

export default function Skill({ skill }: SkillProps) {
  return (
    <TagWrapper>
      {(skill && skill.map((el, index) => <Tag key={index}>{el}</Tag>)) || (
        <Text>아직 작성된 정보가 없습니다.</Text>
      )}
    </TagWrapper>
  );
}
