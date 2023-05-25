import { useState, ChangeEvent } from "react";
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
import useToast from "@/hooks/common/useToast";

interface CommentBoxProps {
  comments: CommentType[];
  boardId: number;
}

export default function CommentBox({ boardId, comments }: CommentBoxProps) {
  const [commentArr, setCommentArr] = useState(comments);
  const [newCommentValue, setNewCommentValue] = useState("");
  const { addToast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentValue(e.target.value);
  };

  const submitComment = async () => {
    const url = "/comments";
    const data = { boardId, content: newCommentValue };
    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      });
      const addedComment = await res.data;
      await setCommentArr((prev) => [...prev, addedComment]);
      await setNewCommentValue("");
      addToast({
        type: "success",
        title: "success",
        content: "댓글 등록에 성공했습니다.",
      });
    } catch (err) {
      console.log(err);
      addToast({
        type: "error",
        title: "error",
        content: "댓글 등록에 실패했습니다",
      });
    }
  };

  return (
    <>
      <StyledHeader>
        댓글 <CommentNumber color="green">{comments.length}</CommentNumber>
      </StyledHeader>

      <CommentInputBox>
        <CommentInput onChange={handleChange} value={newCommentValue} />
        <CommentSubmitBtn type="button" onClick={submitComment}>
          등록
        </CommentSubmitBtn>
      </CommentInputBox>

      <CommentList>
        {commentArr.length &&
          commentArr.map((comment: CommentType) => (
            <CommentItem key={comment.commentId} comment={comment} />
          ))}
      </CommentList>
    </>
  );
}
