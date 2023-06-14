import { media } from "styles/media";
import styled from "styled-components";

export const ManageCardWrapper = styled.li`
  display: flex;
  padding: 20px 10px;
  border-radius: 15px;
  align-items: center;
  gap: 5px;
  border: 2px solid ${(p) => p.theme.grayToDark};
  box-shadow: ${(p) => p.theme.cardBoxShadow};

  background-color: ${(p) => p.theme.componentBgColor};
  ${media.mobile} {
    flex-direction: column;
  }
`;
export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
`;
export const ProfileImage = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border-radius: 25%;
  box-shadow: ${(p) => p.theme.boxShadow};
  overflow: hidden;
`;
export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
`;
export const Nickname = styled.span`
  font-weight: 600;
  font-size: larger;
  ${media.mobile} {
    font-size: medium;
  }
`;
export const Info = styled.span`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: small;
  font-weight: normal;
`;
