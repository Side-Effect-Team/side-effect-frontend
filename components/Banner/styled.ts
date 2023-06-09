import styled from "styled-components";

interface ImageContainerProps {
  type: "recruits" | "projects";
}

export const Wrapper = styled.div`
  width: 100%;
  height: ${(p) => p.theme.height.banner};
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  color: ${(p) => p.theme.colors.white};
  width: 100%;
  height: 100%;
  background: #333 no-repeat center center;
  background-image: url(${(p) =>
    p.type === "recruits"
      ? "/images/recruits-banner-sample.jpg"
      : "/images/projects-banner-sample.jpg"});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  z-index: 3;

  h2 {
    font-size: 2.5rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  button a {
    color: #eee;
  }
`;
