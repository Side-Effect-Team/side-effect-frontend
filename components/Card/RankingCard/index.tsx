import {
  StyledLink,
  Title,
  StyledImage,
  LikeNum,
  ProjectInfo,
  HeartIcon,
} from "./styled";
import DefaultImg from "../../../public/images/ProjectBackground.png";
interface RankingCardType {
  id: number;
  title: string;
  likeNum: number;
  imgUrl: string;
}

export default function RankingCard(card: RankingCardType) {
  const { id, title, likeNum, imgUrl } = card;
  return (
    <StyledLink href={`/projects/${id}`}>
      <StyledImage
        src={DefaultImg}
        alt="이달의 베스트 프로젝트"
        priority
        placeholder="blur"
      />
      <ProjectInfo>
        <Title>{title}</Title>
        <LikeNum>
          <HeartIcon />
          {likeNum}
        </LikeNum>
      </ProjectInfo>
    </StyledLink>
  );
}
