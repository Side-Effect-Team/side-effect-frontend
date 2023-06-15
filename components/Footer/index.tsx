import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { useAppSelector } from "store/hooks";
import MainLogo from "../../public/images/mainLogo.svg";

import {
  Wrapper,
  Contents,
  IconBox,
  ColumnBox,
  Title,
  Column,
  IconWrapper,
} from "./styled";
import { useTheme } from "styled-components";
import DarkModeToggle from "../DarkModeToggle";

export default function Footer() {
  const { isDark } = useAppSelector((state) => state.darkMode);
  const theme = useTheme();
  return (
    <Wrapper>
      <Contents>
        <IconBox>
          <Link href="/">
            <IconWrapper>
              <MainLogo fill={theme.textColor} height="100%" />
            </IconWrapper>
          </Link>
          <Link href="https://github.com/Side-Effect-Team">
            {isDark ? (
              <BsGithub size={50} style={{ color: "#eee" }} />
            ) : (
              <BsGithub size={50} />
            )}
          </Link>
        </IconBox>
        <ColumnBox>
          <Column>
            <Title>팀</Title>
            <Link href="https://github.com/Side-Effect-Team" target="_blank">
              팀 소개
            </Link>
            <Link
              href="https://github.com/Side-Effect-Team/side-effect-backend"
              target="_blank"
            >
              백엔드 개발진
            </Link>
            <Link
              href="https://github.com/Side-Effect-Team/side-effect-frontend"
              target="_blank"
            >
              프론트엔드 개발진
            </Link>
          </Column>
          <Column>
            <Title>고객지원</Title>
            <Link
              href="https://github.com/Side-Effect-Team/side-effect-frontend/issues"
              target="_blank"
            >
              이용 문의
            </Link>
            <Link
              href="https://github.com/Side-Effect-Team/side-effect-frontend/issues"
              target="_blank"
            >
              버그 제보
            </Link>
            <Link
              href="https://github.com/Side-Effect-Team/side-effect-frontend/issues"
              target="_blank"
            >
              컨트리뷰션
            </Link>
          </Column>
          <Column>
            <DarkModeToggle />
          </Column>
        </ColumnBox>
      </Contents>
    </Wrapper>
  );
}
