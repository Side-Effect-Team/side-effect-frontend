import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import { darken, lighten } from "polished";

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
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 15px;
  background-color: ${(p) => p.theme.componentBgColor};
  color: ${(p) => p.theme.textColor};
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 15px;
  flex-direction: column;
  width: 100%;
`;
export const StyledLink = styled(Link)`
  width: 100%;
  padding: 1rem;
  color: ${(p) => p.theme.colors.white};
  background-color: ${(p) => p.theme.colors.primary};
  font-weight: bold;
  font-size: large;
  border-radius: 10px;
  text-align: center;
  box-shadow: ${(p) => p.theme.boxShadow};
`;
export const SelectSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ViewWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
