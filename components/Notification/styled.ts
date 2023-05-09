import { theme } from "@/styles/Theme";
import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  min-height: 100px;
  max-height: 400px;
  background-color: white;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
  padding: 10px;
  position: fixed;
  top: 75px;
  right: 170px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  border: 1px solid ${theme.brandColor.skyBlue};
  box-shadow: 1px 1px 5px rgba(21, 94, 239, 0.25);
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
`;
export const Title = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const Contents = styled.div`
  width: 100%;
  font-size: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
