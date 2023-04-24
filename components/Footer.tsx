import Link from "next/link";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <Link href="/">
          사이드
          <br />
          이펙트
        </Link>
      </div>
      <div>
        <StyledTitle>Built with Next.js</StyledTitle>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  margin: 0 auto;
  position: relative;
  left: 0;
  right: 0;
  background-color: lightgrey;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledTitle = styled.h3`
  text-align: center;
`;

export default Footer;
