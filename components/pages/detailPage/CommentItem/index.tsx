import { useState, useRef } from "react";
import { BiUserCircle, BiEditAlt, BiTrash, BiCheck, BiX } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/router";
import { UserProfile } from "@/detailComps/PostData/styled";
import {
  CommentWrapper,
  ProfileBox,
  CommentContents,
  CommentEditBtnBox,
  OptionBtn,
  BtnText,
} from "./styled";

interface CommentBoxProps {
  comment: CommentType;
}

export default function CommentItem({ comment }: CommentBoxProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.content);
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  const toggleEdit = () => {
    setIsEdit((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
    handleResizeHeight();
  };

  // 수정 취소
  const resetEdit = () => {
    setCommentValue(comment.content);
    toggleEdit();
  };

  const handleResizeHeight = () => {
    if (textareaEl.current) {
      textareaEl.current.style.height = "auto";
      textareaEl.current.style.height = textareaEl.current.scrollHeight + "px";
    }
  };

  // 수정 API 호출
  const editComment = async () => {
    const url = `/comments/${comment.commentId}`;
    try {
      const res = await axios.patch(url, commentValue, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      window.alert("댓글 수정에 성공했습니다");
      router.reload();
    } catch (err) {
      console.log(err);
      window.alert("댓글 삭제에 실패했습니다");
    }
  };

  // 삭제 API 호출
  const deleteComment = async () => {
    const url = `/comments/${comment.commentId}`;
    try {
      const res = await axios.delete(url, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`,
          "Content-Type": "application/json",
        },
      });
      window.alert("댓글 삭제에 성공했습니다");
      router.reload();
    } catch (err) {
      console.log(err);
      window.alert("댓글 삭제에 실패했습니다");
    }
  };

  return (
    <CommentWrapper>
      <div>
        <ProfileBox>
          <UserProfile>
            <BiUserCircle size={25} />
          </UserProfile>
          <h3>{comment.writer}</h3>
        </ProfileBox>
        <CommentContents
          readOnly={!isEdit}
          value={commentValue}
          onChange={handleChange}
          rows={1}
          ref={textareaEl}
        />
      </div>
      <CommentEditBtnBox>
        {isEdit ? (
          <>
            <OptionBtn option="edit" onClick={editComment}>
              <BiCheck size={17} />
              <BtnText>완료</BtnText>
            </OptionBtn>
            <OptionBtn option="delete" onClick={resetEdit}>
              <BiX size={17} />
              <BtnText>취소</BtnText>
            </OptionBtn>
          </>
        ) : (
          <>
            <OptionBtn option="edit" onClick={toggleEdit}>
              <BiEditAlt size={17} />
              <BtnText>수정</BtnText>
            </OptionBtn>
            <OptionBtn option="delete" onClick={deleteComment}>
              <BiTrash size={17} />
              <BtnText>삭제</BtnText>
            </OptionBtn>
          </>
        )}
      </CommentEditBtnBox>
    </CommentWrapper>
  );
}
