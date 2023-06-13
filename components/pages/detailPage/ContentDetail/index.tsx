import { useRef, useEffect } from "react";
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
  ImageContainer,
  DescriptionText,
} from "@/detailComps/ContentDetail/styled";
import { TagWrapper } from "@/postComps/TagBox/styled";
import resizeElementHeight from "utils/resizeElementHeight";

interface ContentDetailProps {
  projectName: string;
  content: string;
  tags?: TagType[];
  projectUrl?: string;
  imgSrc: string;
}

export default function ContentDetail({
  projectName,
  content,
  tags,
  projectUrl,
  imgSrc,
}: ContentDetailProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // 최초 렌더링 시 textArea height를 조정
  useEffect(() => {
    resizeElementHeight(textAreaRef);
  }, []);

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
      <h4>상세 내용</h4>
      {!tags && (
        <ImageContainer>
          <Image
            src={
              imgSrc
                ? `${process.env.NEXT_PUBLIC_API_URL}/free-boards/image/${imgSrc}`
                : "/images/ProjectDefaultBackground.png"
            }
            alt="프로젝트 사진"
            style={{ objectFit: "contain" }}
            fill
            priority
          />
        </ImageContainer>
      )}
      <Description>
        <DescriptionText
          ref={textAreaRef}
          readOnly
          value={content}
          wrap="virtual"
        />
      </Description>
      <hr />
    </Wrapper>
  );
}
