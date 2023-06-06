import styled from "styled-components";
import React from "react";

export interface InputStyle
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const StyledInput = styled.input`
  width: 100%;
  height: 3rem;
  padding: 0 10px;
  color: ${(p) => p.theme.textColor};
  border: 1px solid ${(p) => p.theme.colors.mediumGray};
  background-color: ${(p) => p.theme.mainBackGround};
  border-radius: 10px;
  :focus {
    border: 1px solid ${(p) => p.theme.brandColor.primary};
    outline: none;
  }
`;

export const Label = styled.label`
  display: block;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  padding: 0 10px;
  margin: 5px 0;
  cursor: pointer;
`;
