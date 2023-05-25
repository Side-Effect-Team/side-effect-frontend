import { useState, useRef } from "react";
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
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  const { addToast } = useToast();

  const handleChange = () => {
    // textarea height resize
    if (textareaEl.current) {
      textareaEl.current.style.height = "auto";
      textareaEl.current.style.height = textareaEl.current.scrollHeight + "px";
    }
  };

  const submitComment = async () => {
    const url = "/comments";
    const data = { boardId, content: textareaEl.current?.value };
    try {
      const res = await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
        },
      });
      const addedComment = await res.data;
      await setCommentArr((prev) => [...prev, addedComment]);
      if (textareaEl.current) textareaEl.current.value = "";
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
        <CommentInput onChange={handleChange} rows={4} ref={textareaEl} />
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
