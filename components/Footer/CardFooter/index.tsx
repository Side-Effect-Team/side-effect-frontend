import {
  IconWrapper,
  CommentIcon,
  CreateAt,
  Num,
  Footer,
  HeartNotFillIcon,
  ViewIcon,
} from "./styled";
interface CardFooterProps {
  createdAt: string;
  views: number;
  commentNum: number;
  likeNum: number;
}
export default function CardFooter({
  createdAt,
  views,
  commentNum,
  likeNum,
}: CardFooterProps) {
  return (
    <Footer>
      <CreateAt>{createdAt}</CreateAt>
      <IconWrapper>
        <ViewIcon />
        <Num>{views}</Num>
        <CommentIcon />
        <Num>{commentNum}</Num>
        <HeartNotFillIcon />
        <Num>{likeNum}</Num>
      </IconWrapper>
    </Footer>
  );
}
