import { Column } from "../PostData/styled";
import {
  Wrapper,
  StyledHeader,
  Keyword,
  Description,
  TagContainer,
  ProjectTitle,
  ProjectTitleBox,
} from "@/detailComps/ContentDetail/styled";
import { TagWrapper } from "@/postComps/TagBox/styled";

interface ContentDetailProps {
  projectName: string;
  content: string;
  tags?: TagType[];
}

export default function ContentDetail({
  projectName,
  content,
  tags,
}: ContentDetailProps) {
  return (
    <Wrapper>
      {tags && <StyledHeader>사용 기술</StyledHeader>}
      {tags && (
        <TagContainer>
          <div>
            {tags.map((tag) => (
              <TagWrapper key={tag.stackType}>
                <Keyword>{tag.stackType}</Keyword>
              </TagWrapper>
            ))}
          </div>
        </TagContainer>
      )}
      <StyledHeader>프로젝트 소개</StyledHeader>
      <ProjectTitleBox>
        <div>
          <h4>프로젝트명</h4>
        </div>
        <Column />
        <div>
          <ProjectTitle>{projectName}</ProjectTitle>
        </div>
      </ProjectTitleBox>
      <h4>상세 내용</h4>
      <Description>
        <p>{content}</p>
      </Description>
      <hr />
    </Wrapper>
  );
}
