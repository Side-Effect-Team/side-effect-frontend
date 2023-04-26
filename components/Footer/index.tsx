import Link from "next/link";
import { StyledFooter, StyledTitle } from "./styled";

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

export default Footer;
