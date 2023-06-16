import styled from "styled-components";

interface WrapperProps {
  isOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transform: ${(p) => (p.isOpen ? "translateY(0%)" : "translateY(-5%)")};
  visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
  transition: 0.2s ease-in-out;
  position: absolute;
  margin-top: 0.5rem;
  z-index: 5;
  border: 1px solid black;
  background: ${(p) => p.theme.mainBackGround};
  width: 100%;
  max-height: ${(p) => p.theme.height.keywordBox};
  overflow-y: scroll;
  border-radius: 3px;
`;

export const UlStyled = styled.ul`
  margin: 0;
  padding: 0;
`;

export const TextContainer = styled.div`
  height: ${(p) => p.theme.height.keywordBox};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PStyled = styled.p`
  text-align: center;
`;
