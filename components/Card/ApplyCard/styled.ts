import { media } from "styles/media";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  border: 2px solid ${(p) => p.theme.cardBorder};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(p) => p.theme.componentBgColor};
  box-shadow: ${(p) => p.theme.cardBoxShadow};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
  ${media.mobile} {
    height: 100px;
  }
`;
export const ColumnWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const RowWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  ${media.mobile} {
    align-items: flex-end;
  }
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
  color: ${(p) => p.theme.textColor};
  ${media.mobile} {
    font-size: 16px;
  }
`;

export const Position = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-right: auto;
`;
export const PositionGray = styled.div`
  font-size: 14px;
  color: ${(p) => p.theme.colors.mediumGray};
  margin-right: 5px;
`;
export const Status = styled.div<{ status: string; closed: boolean }>`
  font-size: 1rem;
  border-radius: 4px;
  padding: 0 1rem;

  color: ${(p) =>
    p.status === "APPROVED"
      ? p.theme.brandColor.primary
      : p.status === "REJECTED"
      ? p.theme.colors.gray
      : p.closed === true
      ? p.theme.colors.gray
      : null};
`;
