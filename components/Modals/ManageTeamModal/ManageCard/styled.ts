import { media } from "@/styles/mediatest";
import styled from "styled-components";

export const ManageCardWrapper = styled.li`
  display: flex;
  padding: 20px 10px;
  border-radius: 15px;
  align-items: center;
  gap: 5px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
    rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
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
  border-radius: 50%;
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
  font-weight: 500;
  font-size: large;
  ${media.mobile} {
    font-size: medium;
  }
`;
export const Info = styled.span``;
