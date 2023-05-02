import styled from "styled-components";
import { mediaQuery } from "../../../styles/Media";
export const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${mediaQuery("mobile")`
    position:absolute;
    width:100%;
    padding:35px;
  `}
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
  padding: 10px 0px;
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
  align-items: flex-start;
  width: 100%;
  gap: 30px;
`;

export const Form = styled.form`
  width: 100%;
`;
