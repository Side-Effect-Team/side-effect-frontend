import { useState } from "react";
import Link from "next/link";
import {
  BiUserCircle,
  BiDotsHorizontalRounded,
  BiEditAlt,
  BiTrash,
} from "react-icons/bi";
import {
  PostTitle,
  Row,
  UserBox,
  UserProfile,
  Column,
  SpanStyled,
  OptionBox,
  OptionModalWrapper,
  OptionBtn,
  Container,
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
          {modalOn && <OptionModal />}
        </div>
        <OptionBox onClick={() => setModalOn((prev) => !prev)}>
          <BiDotsHorizontalRounded size={25} />
        </OptionBox>
      </Row>
      <hr />
    </div>
  );
}

function OptionModal() {
  return (
    <OptionModalWrapper>
      <OptionBtn type="button">
        <Container>
          <BiEditAlt size={20} />
          <p>수정</p>
        </Container>
      </OptionBtn>
      <OptionBtn type="button">
        <Container>
          <BiTrash size={20} />
          <p>삭제</p>
        </Container>
      </OptionBtn>
    </OptionModalWrapper>
  );
}
