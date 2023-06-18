import { useState } from "react";
import Link from "next/link";
import { BiUserCircle, BiDotsHorizontalRounded } from "react-icons/bi";
import {
  PostTitle,
  Row,
  UserBox,
  UserProfile,
  Column,
  SpanStyled,
  OptionBox,
  Container,
} from "@/detailComps/PostData/styled";
import { useAppSelector } from "store/hooks";
import Popup from "@/detailComps/Popup";

interface PostDataProps {
  postId: number;
  title: string;
  createdAt: string;
  views: number;
  likeNum: number;
  writerId: number;
  writer: string;
}

export default function PostData({
  postId,
  title,
  createdAt,
  views,
  likeNum,
  writerId,
  writer,
}: PostDataProps) {
  const { userId } = useAppSelector((state) => state.auth);
  const [popupOn, setPopupOn] = useState(false);

  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <Row>
        <Container>
          <Container>
            <UserBox>
              <UserProfile>
                <BiUserCircle size={25} />
              </UserProfile>
              <p>
                <Link href="#">{writer}</Link>
              </p>
            </UserBox>
            <Column />
            <div>
              <span>작성일 </span>
              <SpanStyled>
                {new Date(createdAt).toLocaleString("ko-KR", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  weekday: "short",
                })}
              </SpanStyled>
            </div>
            <Column />
          </Container>
        </Container>
        <Container>
          <div>
            <span>조회 수 </span>
            <SpanStyled>{views}</SpanStyled>
          </div>
          <Column />
          <div>
            <span>좋아요 </span>
            <SpanStyled>{likeNum}</SpanStyled>
            {popupOn && <Popup postId={postId} />}
          </div>
          {/* 로그인한 유저가 작성자가 아니면 수정 팝업 안보임 */}
          {+userId === writerId && (
            <OptionBox onClick={() => setPopupOn((prev) => !prev)}>
              <BiDotsHorizontalRounded size={25} />
            </OptionBox>
          )}
        </Container>
      </Row>
      <hr />
    </div>
  );
}
