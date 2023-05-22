import styled from "styled-components";
export const OAuthLogin = styled.button<{ site?: string }>`
  border: none;
  background: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 15px;
  background-color: ${({ site }) => (site === "kakao" ? "#ffe812" : null)};
`;
export const OAuthLoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  &:hover {
    transform: scale(1.2);
    transition: 0.2s all;
  }
`;
export const ButtonTitle = styled.p`
  text-align: center;
  font-weight: bold;
`;
