import { media } from "@/styles/mediatest";
import { BiBell } from "react-icons/bi";
import { IoClose, IoNotificationsOutline } from "react-icons/io5";
import styled, { css } from "styled-components";

// 알람 아이콘
export const AlarmDiv = styled.div<{ openAlarm: boolean }>`
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;
  ${media.mobile} {
    ${(p) =>
      p.openAlarm &&
      `
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  `}
  }
`;
export const AlarmIconDiv = styled.div<{ openAlarm: boolean }>`
  position: relative;
  ${media.mobile} {
    visibility: ${(p) => p.openAlarm && "hidden"};
  }
`;
export const AlarmButton = styled(BiBell)`
  color: ${(p) => p.theme.brandColor.primary};
  font-size: 24px;
`;
export const AlarmCount = styled.div`
  min-width: 16px;
  position: absolute;
  top: -3px;
  left: 15px;
  background-color: red;
  padding: 2px 4px;
  border-radius: 50%;
  color: ${(p) => p.theme.colors.white};
  font-weight: 700;
  font-size: 12px;
  text-align: center;
`;

// 알람 리스트
export const Container = styled.div`
  width: 350px;
  min-height: 100px;
  max-height: 400px;
  border: 1px solid ${(p) => p.theme.colors.mediumGray};
  background-color: ${(p) => p.theme.mainBackGround};
  border-radius: 10px;
  box-shadow: ${(p) => p.theme.boxShadow};
  padding: 10px;
  position: absolute;
  top: 47px;
  right: -10px;
  overflow: auto;
  animation: openAlarm 0.3s ease-in-out;
  ::-webkit-scrollbar {
    display: none;
  }
  @keyframes openAlarm {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  ${media.mobile} {
    width: 100%;
    height: 100%;
    max-height: 100vh;
    top: 0px;
    right: 0px;
    left: 0px;
    animation: slide 0.5s ease-in-out;
  }
  @keyframes slide {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0 10px 15px;
`;
export const HeaderTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;
export const CloseButton = styled(IoClose)`
  font-size: 28px;
  color: ${(p) => p.theme.colors.mediumGray};
  cursor: pointer;
`;
export const DeleteButton = styled(IoClose)`
  font-size: 16px;
  color: ${(p) => p.theme.colors.mediumGray};
  cursor: pointer;
  display: none;
  :hover {
    color: ${(p) => p.theme.brandColor.primary};
  }
  ${media.mobile} {
    display: block;
  }
`;
export const Wrapper = styled.div<{ watched: boolean }>`
  width: 100%;
  height: 90px;
  border: 2px solid
    ${(p) => (p.watched ? p.theme.grayToDark : p.theme.alarmDefaultColor)};
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  color: ${(p) => (p.watched ? p.theme.grayToDark : p.theme.textColor)};
  background-color: ${(p) => p.theme.componentBgColor};

  :hover {
    ${DeleteButton} {
      display: block;
    }
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 700;
`;

export const Contents = styled.div`
  font-size: 14px;
`;
export const Date = styled.div`
  font-size: 14px;
`;
export const EmptyMessage = styled.div`
  font-size: 16px;
  color: ${(p) => p.theme.colors.mediumGray};
  margin-left: 15px;
`;
