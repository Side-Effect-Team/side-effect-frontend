import { media } from "@/styles/mediatest";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import styled from "styled-components";

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  ${media.mobile} {
    justify-content: flex-end;
  }
`;
export const CreateAt = styled.div`
  font-size: 16px;
  margin-top: 2px;
  color: ${(p) => p.theme.colors.gray};
  ${media.mobile} {
    display: none;
  }
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
`;
export const HeartNotFillIcon = styled(AiOutlineHeart)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const CommentIcon = styled(AiOutlineMessage)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const Num = styled.div`
  font-size: 16px;
  margin-right: 5px;
  margin-top: 2px;
  color: ${(p) => p.theme.colors.gray};
  ${media.mobile} {
    font-size: 14px;
  }
`;
export const ViewIcon = styled(BsEye)`
  color: ${(p) => p.theme.colors.gray};
  font-size: 16px;
  ${media.mobile} {
    font-size: 14px;
  }
`;
