import { useState, useRef, useEffect } from "react";
import { BiUserCircle, BiEditAlt, BiTrash, BiCheck, BiX } from "react-icons/bi";
import { UserProfile } from "@/detailComps/PostData/styled";
import {
  CommentWrapper,
  CommentColumn,
  ProfileBox,
  CommentContents,
  CommentEditBtnBox,
  OptionBtn,
  BtnText,
} from "./styled";
import { useAppSelector } from "@/store/hooks";

interface CommentBoxProps {
  comment: CommentType;
  onEdit: (commentId: number, content: string) => void;
  onDelete: (commentId: number) => void;
}

export default function CommentItem({
  comment,
  onEdit,
  onDelete,
}: CommentBoxProps) {
  const [isEdit, setIsEdit] = useState(false);
  const [commentValue, setCommentValue] = useState(comment.content);
  const textareaEl = useRef<HTMLTextAreaElement>(null);
  const userId = useAppSelector((state) => +state.auth.userId);

  const resizeTextAreaHeight = () => {
    if (textareaEl.current) {
      textareaEl.current.style.height = "auto";
      textareaEl.current.style.height = textareaEl.current.scrollHeight + "px";
    }
  };

  const startEdit = () => {
    setIsEdit((prev) => !prev);
    if (textareaEl.current) textareaEl.current.focus();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCommentValue(e.target.value);
    resizeTextAreaHeight();
  };

  // 수정 취소
  const resetEdit = () => {
    setCommentValue(comment.content);
    setIsEdit((prev) => !prev);
    if (textareaEl.current) textareaEl.current.style.height = "auto";
  };

  // 렌더링 시 댓글 크기 조절
  useEffect(() => {
    resizeTextAreaHeight();
  }, [textareaEl]);

  return (
    <CommentWrapper>
      <CommentColumn>
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
      </CommentColumn>
      {comment.writerId === userId && (
        <CommentEditBtnBox>
          {isEdit ? (
            <>
              <OptionBtn
                option="edit"
                onClick={() => onEdit(comment.commentId, commentValue)}
              >
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
              <OptionBtn option="edit" onClick={startEdit}>
                <BiEditAlt size={17} />
                <BtnText>수정</BtnText>
              </OptionBtn>
              <OptionBtn
                option="delete"
                onClick={() => onDelete(comment.commentId)}
              >
                <BiTrash size={17} />
                <BtnText>삭제</BtnText>
              </OptionBtn>
            </>
          )}
        </CommentEditBtnBox>
      )}
    </CommentWrapper>
  );
}
