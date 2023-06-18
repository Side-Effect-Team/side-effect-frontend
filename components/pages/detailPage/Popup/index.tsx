import { useRouter } from "next/router";
import customAxios from "apis/customAxios";
import { Container, OptionBtn, Wrapper } from "./styled";
import { BiEditAlt, BiTrash } from "react-icons/bi";

interface PopupProps {
  postId: number;
}

export default function Popup({ postId }: PopupProps) {
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
    <Wrapper>
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
    </Wrapper>
  );
}
