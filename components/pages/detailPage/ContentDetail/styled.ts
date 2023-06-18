import styled, { css } from "styled-components";

interface ProjectTitleProps {
  url?: string;
}

export const Wrapper = styled.div`
  margin: 1rem 0;
`;

export const StyledHeader = styled.h2`
  margin-bottom: 0.75rem;
`;

export const TagContainer = styled.div`
  margin-bottom: 1rem;
`;

export const Description = styled.div`
  width: 100%;
  min-height: 100px;
  background: ${(p) => p.theme.mainBackGround};
  border-radius: 5px;
  margin-bottom: 1rem;

  textarea {
    padding: 0.35rem;
    resize: none;
    outline: none;
    width: 100%;
    border: none;
  }
`;

export const ProjectTitle = styled.span<ProjectTitleProps>`
  font-weight: 600;
  letter-spacing: 0.15rem;

  :hover {
    ::after {
      ${(p) =>
        p.url &&
        css`
          content: "🌐링크 이동: ${p.url}";
        `}
      width: 100%;
      max-width: 250px;
      height: 100%;
      max-height: 100px;
      position: absolute;
      background: transparent;
      border-radius: 5px;
      padding: 0.5rem;
    }
  }
`;

export const ProjectTitleBox = styled.div`
  display: flex;
  align-items: center;
  line-height: normal;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  // next/Image fill 일때, 부모 element height 필수
  height: 35vw;
  max-height: 350px;
  margin-bottom: 1rem;
`;

export const DescriptionText = styled.textarea`
  width: 100%;
  background: ${(p) => p.theme.mainBackGround};
  color: ${(p) => p.theme.textColor};
`;
