import { MyPageProps } from "../../../../pages/mypage";
import { Tag, TagWrapper, Text } from "./styled";

export default function Skill(p: MyPageProps) {
  return (
    <TagWrapper>
      {p.data?.skill?.map((el, index) => <Tag key={index}>{el}</Tag>) || (
        <Text>아직 작성된 정보가 없습니다.</Text>
      )}
    </TagWrapper>
  );
}
