import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  border: 1px solid lightgray;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
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
  font-weight: 500;
  color: gray;
  margin-right: 5px;
`;

export const Position = styled.div`
  font-size: 14px;
`;
export const PositionGray = styled.div`
  font-size: 14px;
  color: gray;
  margin-right: 5px;
`;
