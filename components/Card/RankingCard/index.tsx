import { StyledLink, Title, StyledImage } from "./styled";
import DefaultImg from "../../../public/images/profilePic.png";
export default function RankingCard() {
  return (
    <StyledLink href={"/"}>
      <StyledImage
        src={DefaultImg}
        alt="이달의 베스트 프로젝트"
        priority
        placeholder="blur"
      />
      <Title>ㅁㄴㅇㅁㄴㅇ</Title>
    </StyledLink>
  );
}
