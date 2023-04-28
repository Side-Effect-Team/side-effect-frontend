import styled, { css } from "styled-components";
import { mediaQuery } from "../../styles/Media";

interface SlideContentsWrapperProps {
  bgColor: string;
  slidePos: string;
}

interface ButtonStyledProps {
  size?: number;
  direction: "left" | "right";
  onClick?: () => void;
}

export const CarouselWrapper = styled.div`
  height: ${(p) => p.theme.height.carousel};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: tan;
  overflow: hidden;
  position: relative;
`;

export const SlideContentsWrapper = styled.main<SlideContentsWrapperProps>`
  position: absolute;
  height: ${(p) => p.theme.height.header};
  left: 0;
  width: 100%;
  height: ${(p) => p.theme.height.carousel};
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: ${(p) => p.bgColor};
  opacity: 0;
  transition: all 0.3s linear;

  ${mediaQuery("mobile")`
    flex-direction: column;
  `}

  ${(p) =>
    p.slidePos === "currentSlide"
      ? css`
          opacity: 1;
          transform: translateX(0);
        `
      : p.slidePos === "nextSlide"
      ? css`
          transform: translateX(100%);
        `
      : css`
          transform: translateX(-100%);
        `}
`;

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: ${(p) => (p.size ? p.size + "px" : "35px")};
  height: ${(p) => (p.size ? p.size + "px" : "35px")};
  background: ${(p) => p.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20%;
  cursor: pointer;
  position: absolute;
  z-index: 5;
  opacity: 0.5;
  border: transparent;

  left: ${(p) => p.direction === "left" && "1.5rem"};
  right: ${(p) => p.direction === "right" && "1.5rem"};

  svg {
    transform: scale(1.2);
  }

  :hover {
    opacity: 0.8;
  }
`;
