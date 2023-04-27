import styled from "styled-components";

interface WrapperProps {
  size: number;
}

/** 작아질 수록 아이콘 사이즈 증가시키는 상수 */
const SIZE_PARAM = 25;

export const Wrapper = styled.div<WrapperProps>`
  width: ${(p) => p.size + "px"};
  height: ${(p) => p.size + "px"};
  background: ${(p) => p.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15%;

  svg {
    transform: scale(${(p) => p.size / SIZE_PARAM});
  }

  :hover {
    opacity: 0.75;
  }
`;
