import styled from "styled-components";
import Button from "@/components/Button";

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const NameBox = styled.div`
  padding-left: 0.5rem;
  width: 100px;
`;

export const StatusBox = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CloseBtn = styled(Button)`
  cursor: not-allowed;
  background: ${(p) => p.theme.colors.gray};

  :hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;
