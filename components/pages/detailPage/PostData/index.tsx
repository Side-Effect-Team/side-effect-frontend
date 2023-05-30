import { useEffect, useState } from "react";
import customAxios from "@/apis/customAxios";
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
  postId: number;
  title: string;
  createdAt: string;
  views: number;
  likeNum: number;
  userId: number;
  writer: string;
}

interface OptionPopupProps {
  postId: number;
}

export default function PostData({
  postId,
  title,
  createdAt,
  views,
  likeNum,
  userId,
  writer,
}: PostDataProps) {
  const [isOwner, setIsOwner] = useState(false);
  const [popupOn, setPopupOn] = useState(false);

  useEffect(() => {
    setIsOwner(+localStorage.getItem("id")! === userId);
  }, [userId]);

  return (
    <div>
      <PostTitle>{title}</PostTitle>
      <Row>
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
        <div>
          <span>조회 수 </span>
          <SpanStyled>{views}</SpanStyled>
        </div>
        <Column />
        <div>
          <span>좋아요 </span>
          <SpanStyled>{likeNum}</SpanStyled>
          {popupOn && <OptionPopup postId={postId} />}
        </div>
        {/* 로그인한 유저가 작성자가 아니면 수정 팝업 안보임 */}
        {isOwner && (
          <OptionBox onClick={() => setPopupOn((prev) => !prev)}>
            <BiDotsHorizontalRounded size={25} />
          </OptionBox>
        )}
      </Row>
      <hr />
    </div>
  );
}

function OptionPopup({ postId }: OptionPopupProps) {
  const router = useRouter();
  const postCategory = router.pathname.split("/")[1];

  // 게시글 삭제
  const deletePost = async (id: number) => {
    let url = "";
    if (postCategory === "recruits") url += "/recruit-board/" + id;
    if (postCategory === "projects") url += "/free-boards/" + id;

    try {
      const res = await customAxios.delete(url);
      if (res.status === 200) {
        await window.alert("게시물이 성공적으로 삭제되었습니다");
        await router.push(`/${postCategory}`);
      }
    } catch (err) {
      console.log(err);
      window.alert("게시물 삭제에 실패했습니다");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await deletePost(postId);
    }
  };

  const handleEdit = async () => {
    await router.push(`/${postCategory}/edit/${postId}`);
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
