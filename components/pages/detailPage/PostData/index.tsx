import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  BiUserCircle,
  BiDotsHorizontalRounded,
  BiEditAlt,
  BiTrash,
  BiBookmarkHeart,
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
  id: number;
  title: string;
  createdAt: string;
  views: number;
  likeNum: number;
}

interface OptionModalProps {
  id: number;
}

export default function PostData({
  id,
  title,
  createdAt,
  views,
  likeNum,
}: PostDataProps) {
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
        <div>
          <span>조회수 </span>
          <SpanStyled>{views}</SpanStyled>
          {modalOn && <OptionModal id={id} />}
        </div>
        <Column />
        <div>
          <BiBookmarkHeart />
          <SpanStyled>{likeNum}</SpanStyled>
        </div>
        <OptionBox onClick={() => setModalOn((prev) => !prev)}>
          <BiDotsHorizontalRounded size={25} />
        </OptionBox>
      </Row>
      <hr />
    </div>
  );
}

function OptionModal({ id }: OptionModalProps) {
  const router = useRouter();

  // 게시글 삭제
  const deletePost = async (id: number) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/recruit-board/${id}`;
    try {
      const res = await axios.delete(url, {
        headers: {
          // 로그인 기능 미구현으로 NEXT_PUBLIC_TOKEN에 발급받은 토큰을 넣고 실행!
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      });
      if (res.status === 200)
        await window.alert("게시물이 성공적으로 삭제되었습니다");
    } catch (err) {
      console.log(err);
      window.alert("게시물 삭제에 실패했습니다");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await deletePost(id);
      await router.push("/recruits");
    }
  };

  const handleEdit = async () => {
    await router.push(`/recruits/edit/${id}`);
  };

  return (
    <OptionModalWrapper>
      <OptionBtn type="button" onClick={handleEdit}>
        <Container>
          <BiEditAlt size={20} />
          <p>수정</p>
        </Container>
      </OptionBtn>
      <OptionBtn type="button" onClick={handleDelete}>
        <Container>
          <BiTrash size={20} />
          <p>삭제</p>
        </Container>
      </OptionBtn>
    </OptionModalWrapper>
  );
}
