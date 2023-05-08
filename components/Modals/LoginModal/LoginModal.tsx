import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
export default function LoginModal() {
  const router = useRouter();
  const { isOpen } = useAppSelector((state) => state.modal);
  return <Wrapper isOpen={isOpen}>d</Wrapper>;
}
const Wrapper = styled.div<{ isOpen: boolean }>`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  display: flex;
  height: 100%;
  width: 600px;
  background-color: white;
`;
