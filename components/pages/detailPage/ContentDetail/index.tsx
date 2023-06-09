import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Column } from "../PostData/styled";
import {
  Wrapper,
  StyledHeader,
  Description,
  TagContainer,
  ProjectTitle,
  ProjectTitleBox,
  ImageContainer,
  DescriptionText,
} from "@/detailComps/ContentDetail/styled";
import resizeElementHeight from "utils/resizeElementHeight";
import TagChip from "components/PostForm/TagChip";

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
              <TagChip key={tag.stackType} keyword={tag.stackType} />
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
              <ProjectTitle url={projectUrl}>{projectName}</ProjectTitle>
            </Link>
          )}
        </div>
      </ProjectTitleBox>
      {/* 한 줄 소개 */}
      {subTitle && (
        <div>
          <h4>한 줄 소개</h4>
          <p>{subTitle}</p>
        </div>
      )}
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
