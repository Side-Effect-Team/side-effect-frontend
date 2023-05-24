import { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledHeader,
  CommentNumber,
  CommentInput,
  CommentInputBox,
  CommentSubmitBtn,
  CommentList,
} from "./styled";
import CommentItem from "../CommentItem";

interface CommentBoxProps {
  comments: CommentType[];
  boardId: number;
}

export default function CommentBox({ boardId, comments }: CommentBoxProps) {
  const [commentArr, setCommentArr] = useState(comments);
  const [newCommentValue, setNewCommentValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentValue(e.target.value);
  };

  const submitComment = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_KEY}/comments`;
    const data = { boardId, content: newCommentValue };
    try {
      const res = await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      });
      await setCommentArr(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
      window.alert("댓글 작성에 실패했습니다");
    }
  };

  useEffect(() => {
    console.log(newCommentValue);
  }, [newCommentValue]);

  return (
    <>
      <StyledHeader>
        댓글 <CommentNumber color="green">{comments.length}</CommentNumber>
      </StyledHeader>

      <form onSubmit={submitComment}>
        <CommentInputBox>
          <CommentInput onChange={handleChange} />
          <CommentSubmitBtn type="submit">등록</CommentSubmitBtn>
        </CommentInputBox>
      </form>

      <CommentList>
        {commentArr.length &&
          commentArr.map((comment: CommentType) => (
            <CommentItem key={comment.commentId} comment={comment} />
          ))}
      </CommentList>
    </>
  );
}
