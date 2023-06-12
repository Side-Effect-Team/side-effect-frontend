import Link from "next/link";
import Image from "next/image";
import { Column } from "../PostData/styled";
import {
  Wrapper,
  StyledHeader,
  Keyword,
  Description,
  TagContainer,
  ProjectTitle,
  ProjectTitleBox,
  ProjectSubTitleBox,
} from "@/detailComps/ContentDetail/styled";
import { TagWrapper } from "@/postComps/TagBox/styled";

interface ContentDetailProps {
  projectName: string;
  content: string;
  tags?: TagType[];
  projectUrl?: string;
  imgSrc: string;
  subTitle?: string;
}

export default function ContentDetail({
  projectName,
  content,
  tags,
  projectUrl,
  imgSrc,
  subTitle,
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
        <h4>프로젝트명</h4>
        <Column />
        <div>
          {tags ? (
            <ProjectTitle>{projectName}</ProjectTitle>
          ) : (
            <Link href={projectUrl!} target="_blank">
              <ProjectTitle>{projectName}</ProjectTitle>
            </Link>
          )}
        </div>
      </ProjectTitleBox>
      {subTitle && (
        <ProjectTitleBox>
          <ProjectSubTitleBox>한 줄 소개</ProjectSubTitleBox>
          <Column />
          <p>{subTitle}</p>
        </ProjectTitleBox>
      )}
      <h4>상세 내용</h4>
      <div>
        {tags ? (
          <Image
            src={
              imgSrc
                ? `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/image/${imgSrc}`
                : "/images/BoardDefaultBackground.png"
            }
            alt="프로젝트 사진"
            width={400}
            height={300}
            priority
          />
        ) : (
          <Image
            src={
              imgSrc
                ? `${process.env.NEXT_PUBLIC_API_URL}/free-boards/image/${imgSrc}`
                : "/images/ProjectDefaultBackground.png"
            }
            alt="프로젝트 사진"
            width={400}
            height={300}
            priority
          />
        )}
      </div>
      <Description>
        <textarea readOnly value={content} />
      </Description>
      <hr />
    </Wrapper>
  );
}
