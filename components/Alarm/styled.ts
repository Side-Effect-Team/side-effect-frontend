import { media } from "@/styles/mediatest";
import { IoClose, IoNotificationsOutline } from "react-icons/io5";
import styled from "styled-components";

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
export const AlarmButton = styled(IoNotificationsOutline)`
  color: ${(p) => p.theme.brandColor.primary};
  font-size: 24px;
`;
export const AlarmCount = styled.div`
  position: absolute;
  top: 1px;
  left: 15px;
  background-color: red;
  padding: 2px 4px;
  border-radius: 10px;
  color: ${(p) => p.theme.colors.white};
  font-weight: 700;
  font-size: 12px;
`;

// 알람 리스트
export const Container = styled.div`
  width: 350px;
  min-height: 100px;
  max-height: 400px;
  border: 1px solid ${(p) => p.theme.colors.mediumGray};
  background-color: ${(p) => p.theme.componentBgColor};
  border-radius: 10px;
  box-shadow: ${(p) => p.theme.boxShadow};
  padding: 10px;
  position: absolute;
  top: 47px;
  right: -10px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
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
  border: 1.5px solid
    ${(p) => (p.watched ? p.theme.closedColor : p.theme.openColor)};
  /* box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25); */
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  color: ${(p) => (p.watched ? p.theme.closedColor : p.theme.textColor)};

  :hover {
    /* box-shadow: 1px 1px 5px rgba(21, 94, 239, 0.25); */
    box-shadow: ${(p) => p.theme.boxShadow};
    ${DeleteButton} {
      display: block;
    }
  }
  ${media.mobile} {
    /* box-shadow: 1px 1px 5px rgba(21, 94, 239, 0.25); */
  }
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  /* color: ${(p) => p.theme.textColor}; */
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
