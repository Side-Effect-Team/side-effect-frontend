import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
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
  OptionPopupWrapper,
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

interface OptionPopupProps {
  id: number;
}

export default function PostData({
  id,
  title,
  createdAt,
  views,
  likeNum,
}: PostDataProps) {
  const [popupOn, setPopupOn] = useState(false);

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
          <span>조회 수 </span>
          <SpanStyled>{views}</SpanStyled>
        </div>
        <Column />
        <div>
          <span>좋아요 </span>
          <SpanStyled>{likeNum}</SpanStyled>
          {popupOn && <OptionPopup id={id} />}
        </div>
        <OptionBox onClick={() => setPopupOn((prev) => !prev)}>
          <BiDotsHorizontalRounded size={25} />
        </OptionBox>
      </Row>
      <hr />
    </div>
  );
}

function OptionPopup({ id }: OptionPopupProps) {
  const router = useRouter();
  const postCategory = router.pathname.split("/")[1];

  // 게시글 삭제
  const deletePost = async (id: number) => {
    let url = process.env.NEXT_PUBLIC_API_URL as string;
    if (postCategory === "recruits") url += "/recruit-board/" + id;
    if (postCategory === "projects") url += "/free-boards/" + id;

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
      await router.push(`/${postCategory}`);
    }
  };

  const handleEdit = async () => {
    await router.push(`/${postCategory}/edit/${id}`);
  };

  return (
    <OptionPopupWrapper>
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
    </OptionPopupWrapper>
  );
}
