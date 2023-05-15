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
  OptionModal,
} from "@/detailComps/PostData/styled";

interface PostDataProps {
  title: string;
  views: number;
}

export default function PostData({ title, views }: PostDataProps) {
  const [modalOn, setModalOn] = useState(false);

  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <Row>
        <UserBox>
          <UserProfile>
            <BiUserCircle size={25} />
          </UserProfile>
          <p>
            <Link href="#">작성자1</Link>
          </p>
        </UserBox>
        <Column />
        <div>
          <span>작성일 </span>
          <SpanStyled>2023-05-22</SpanStyled>
        </div>
        <Column />
        <div>
          <span>조회수 </span>
          <SpanStyled>{views}</SpanStyled>
        </div>
        <OptionBox onClick={() => setModalOn((prev) => !prev)}>
          <BiDotsHorizontalRounded size={25} />
          {modalOn && <OptionModal />}
        </OptionBox>
      </Row>
      <hr />
    </div>
  );
}
