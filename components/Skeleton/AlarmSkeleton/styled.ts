import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  border: 1px solid ${(p) => p.theme.brandColor.lightGray};
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.div`
  width: 60%;
  height: 16px;
  background-color: ${(p) => p.theme.brandColor.lightGray};
`;

export const Contents = styled.div`
  width: 50%;
  height: 14px;
  font-size: 14px;
  background-color: ${(p) => p.theme.brandColor.lightGray};
`;
export const Date = styled.div`
  width: 25%;
  height: 14px;
  font-size: 14px;
  background-color: ${(p) => p.theme.brandColor.lightGray};
`;
