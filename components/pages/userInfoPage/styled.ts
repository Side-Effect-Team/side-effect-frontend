import styled from "styled-components";
import { mediaQuery } from "@/styles/Media";
export const Wrapper = styled.div`
  padding: 20px;
`;
export const Label = styled.label`
  text-align: start;
  font-weight: bold;
  margin-right: 15px;
`;
export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 10px;
`;
export const Input = styled.input`
  outline: none;
  border: none;
  padding: 10px 0;
  width: 100%;
  border-bottom: 2px solid black;
`;
export const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 100%;
`;

export const SelectSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0px 20px;
`;
