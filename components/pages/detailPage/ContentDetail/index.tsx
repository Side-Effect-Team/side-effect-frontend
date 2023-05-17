import {
  Wrapper,
  StyledHeader,
  Keyword,
  Description,
  TagContainer,
} from "@/detailComps/ContentDetail/styled";
import { TagWrapper } from "@/postComps/TagBox/styled";

interface ContentDetailProps {
  projectName: string;
  content: string;
  tags: TagType[];
}

export default function ContentDetail({
  projectName,
  content,
  tags,
}: ContentDetailProps) {
  return (
    <Wrapper>
      <StyledHeader>사용 기술</StyledHeader>
      <TagContainer>
        <div>
          {tags.map((tag) => (
            <TagWrapper key={tag.stackType}>
              <Keyword>{tag.stackType}</Keyword>
            </TagWrapper>
          ))}
        </div>
      </TagContainer>
      <StyledHeader>프로젝트 소개</StyledHeader>
      <Description>
        <p>{content}</p>
      </Description>
      <hr />
    </Wrapper>
  );
}
