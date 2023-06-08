import { useEffect, useRef, useState } from "react";
import Tag from "..";
import {
  EmptyTitle,
  PlusTag,
  TagContainer,
  TagTitle,
  TagWrapper,
} from "./styled";
interface TagArrayProps {
  tagArray: string[];
  title: string;
  fill?: string;
  fontSize?: string;
  isRecruiting?: boolean;
}

export default function TagBox({
  title,
  tagArray,
  fill,
  fontSize,
  isRecruiting,
}: TagArrayProps) {
  const tagRef = useRef<HTMLDivElement>(null); // 태그가 차지할 수 있는 영역
  const [hiddenTagCount, setHiddenTagCount] = useState(0);

  const calculateTagWidths = () => {
    const tagWrapper = tagRef.current;

    if (tagWrapper) {
      const TagWrapperWidth = tagWrapper.offsetWidth;
      const tagsArray = Array.from(tagWrapper.children) as HTMLDivElement[];
      let cumulativeWidth = 0;
      let hiddenCount = 0;
      tagsArray.forEach((tag) => {
        // 각 태그 길이 계산
        const tagWidth = tag.offsetWidth;
        cumulativeWidth += tagWidth + 7;

        // 길이가 넘어가는 순간 상태 변화
        if (cumulativeWidth - 7.5 > TagWrapperWidth) {
          hiddenCount++;
          setHiddenTagCount(hiddenCount);
        } else if (cumulativeWidth <= TagWrapperWidth) {
          setHiddenTagCount(0);
        }
      });
    }
  };

  let resizeTimer: NodeJS.Timeout;
  const handleResize = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      calculateTagWidths();
    }, 300);
  };

  useEffect(() => {
    calculateTagWidths(); // 첫 렌더링 시에도 숨겨진 태그가 보이도록
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <TagContainer>
      <TagTitle>{title}</TagTitle>
      {tagArray.length === 0 ? (
        <EmptyTitle>- 추후 논의</EmptyTitle>
      ) : (
        <TagWrapper ref={tagRef}>
          {tagArray.map((el, index) => (
            <Tag
              key={index}
              fill={fill}
              fontSize={fontSize}
              isRecruiting={isRecruiting}
            >
              {el}
            </Tag>
          ))}
        </TagWrapper>
      )}
      {hiddenTagCount ? (
        <PlusTag fill={fill || "true"}>+ {hiddenTagCount}</PlusTag>
      ) : (
        <></>
      )}
    </TagContainer>
  );
}
