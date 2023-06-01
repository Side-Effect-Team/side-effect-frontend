import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  border: 1.5px solid ${(p) => p.theme.colors.mediumGray};
  border-radius: 10px;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  cursor: pointer;
`;
export const ColumnWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const RowWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const TitleGray = styled.div`
  font-size: 18px;
  color: ${(p) => p.theme.colors.mediumGray};
  margin-right: 5px;
`;

export const Position = styled.div`
  font-size: 14px;
  font-weight: 600;
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
