import {
  StyledHeader,
  CommentNumber,
  CommentWrapper,
  CommentInput,
  CommentInputBox,
  CommentSubmitBtn,
} from "./styled";
import { useState } from "react";

export default function CommentBox() {
  const [comments, setComments] = useState();
  return (
    <div>
      <StyledHeader>
        댓글 <CommentNumber color="green">2</CommentNumber>
      </StyledHeader>

      <form>
        <CommentInputBox>
          <CommentInput />
          <CommentSubmitBtn type="submit">등록</CommentSubmitBtn>
        </CommentInputBox>
      </form>
    </div>
  );
}

function Comment() {
  return <CommentWrapper></CommentWrapper>;
}
