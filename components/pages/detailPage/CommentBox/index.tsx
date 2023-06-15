import { useState, useRef, useCallback } from "react";
import {
  StyledHeader,
  CommentNumber,
  CommentInput,
  CommentInputBox,
  CommentSubmitBtn,
  CommentList,
} from "./styled";
import CommentItem from "../CommentItem";
import useToast from "hooks/common/useToast";
import customAxios from "apis/customAxios";
import resizeElementHeight from "utils/resizeElementHeight";
import { useAppSelector } from "store/hooks";

interface CommentBoxProps {
  comments: CommentType[];
  boardId: number;
}

export default function CommentBox({ boardId, comments }: CommentBoxProps) {
  const [commentArr, setCommentArr] = useState(comments);
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  const { addToast } = useToast();
  const { userId } = useAppSelector((state) => state.auth);

  const handleChange = () => {
    resizeElementHeight(textareaEl);
  };

  const submitComment = async () => {
    if (textareaEl.current?.value.length === 0) {
      addToast({
        type: "info",
        title: "info",
        content: "댓글 내용을 입력해주세요",
      });
      return;
    }

    const url = "/comments";
    const data = { boardId, content: textareaEl.current?.value };
    try {
      const res = await customAxios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
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

  const editComment = async (commentId: number, content: string) => {
    const url = `/comments/${commentId}`;

    try {
      const res = await customAxios.patch(
        url,
        { content },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const newCommentArr = commentArr.map((comment) => {
        if (comment.commentId === commentId) return { ...comment, content };
        return comment;
      });
      await setCommentArr(newCommentArr);
      addToast({
        type: "success",
        title: "success",
        content: "댓글 수정에 성공했습니다.",
      });
    } catch (err) {
      console.log(err);
      addToast({
        type: "error",
        title: "error",
        content: "댓글 수정에 실패했습니다.",
      });
    }
  };

  const deleteComment = useCallback(
    async (commentId: number) => {
      const url = `/comments/${commentId}`;
      try {
        const res = await customAxios.delete(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const newCommentArr = commentArr.filter(
          (comment) => comment.commentId !== commentId,
        );
        setCommentArr(newCommentArr);

        addToast({
          type: "success",
          title: "success",
          content: "댓글 삭제에 성공했습니다",
        });
      } catch (err) {
        console.log(err);
        addToast({
          type: "error",
          title: "error",
          content: "댓글 삭제에 실패했습니다",
        });
      }
    },
    [commentArr.length],
  );

  return (
    <>
      <StyledHeader>
        댓글 <CommentNumber color="green">{comments.length}</CommentNumber>
      </StyledHeader>

      <CommentInputBox>
        <CommentInput onChange={handleChange} rows={4} ref={textareaEl} />
        {userId ? (
          <CommentSubmitBtn type="button" onClick={submitComment}>
            등록
          </CommentSubmitBtn>
        ) : (
          <CommentSubmitBtn
            type="button"
            onClick={() => window.alert("로그인이 필요합니다")}
          >
            등록
          </CommentSubmitBtn>
        )}
      </CommentInputBox>

      <CommentList>
        {commentArr.length > 0 &&
          commentArr.map((comment: CommentType) => (
            <CommentItem
              key={comment.commentId}
              comment={comment}
              onEdit={editComment}
              onDelete={deleteComment}
            />
          ))}
      </CommentList>
    </>
  );
}
