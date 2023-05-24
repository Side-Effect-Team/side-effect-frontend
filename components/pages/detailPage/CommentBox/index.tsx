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
}

export default function CommentBox({ comments }: CommentBoxProps) {
  return (
    <>
      <StyledHeader>
        댓글 <CommentNumber color="green">{comments.length}</CommentNumber>
      </StyledHeader>

      <form>
        <CommentInputBox>
          <CommentInput />
          <CommentSubmitBtn type="submit">등록</CommentSubmitBtn>
        </CommentInputBox>
      </form>

      <CommentList>
        {comments.map((comment: CommentType) => (
          <CommentItem key={comment.commentId} comment={comment} />
        ))}
      </CommentList>
    </>
  );
}
