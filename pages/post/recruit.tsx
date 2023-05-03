import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import styled, { css } from "styled-components";
import { breakPoints } from "@/styles/Media";
import Button from "../../components/Button";
import { useInputImage } from "@/hooks/useInputImage";

interface PostHeaderProps {
  category: string;
}

/** 모집 인원 */
interface OpenTypes {
  part: string;
  needs: number;
}

/** 전체 폼 */
interface FormTypes {
  projectName: string;
  title: string;
  opens?: OpenTypes[];
  tags?: string[];
  image: string;
  description: string;
}

export default function PostPage() {
  const router = useRouter();
  const { imgSrc, handleImgChange } = useInputImage(
    "/images/default-input-image.png",
  );
  const [form, setForm] = useState<FormTypes>({
    projectName: "",
    title: "",
    opens: [
      {
        part: "",
        needs: 0,
      },
    ],
    tags: [],
    image: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "tags")
      setForm({ ...form, [e.target.name]: e.target.value.split(",") });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let recruits = localStorage.getItem("recruits");
    recruits = recruits && JSON.parse(recruits);
    const newRecruit = {
      id: recruits ? recruits.length + 1 : 1,
      headerImage: imgSrc,
      headerTitle: form.projectName,
      tag: form.tags,
      title: form.title,
      content: form.description,
      createdAt: "2023-05-01",
      like: !!Math.round(Math.random()),
    };

    const newRecruits = recruits ? [...recruits, newRecruit] : [newRecruit];
    localStorage.setItem("recruits", JSON.stringify(newRecruits));
    if (window.confirm("등록이 완료되었습니다")) router.push("/recruits");
    else router.push("/recruits");
  };

  return (
    <Wrapper>
      <Contents>
        <PostHeader category={router.query.category + ""}>
          {router.query.category === "recruit"
            ? "모집 게시글 등록"
            : "자랑 게시글 등록"}
        </PostHeader>
        <FormStyled action="submit" onSubmit={handleSubmit}>
          <InputBox>
            <h2>프로젝트 이름</h2>
            <input
              name="projectName"
              type="text"
              placeholder="3~20자의 내용을 입력해주세요"
              value={form.projectName}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <h2>게시글 제목</h2>
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <h2>태그</h2>
            <p>콤마로 구분해주세요</p>
            <input
              name="tags"
              type="text"
              placeholder="Figma,React,TypeScript"
              value={form.tags}
              onChange={handleChange}
              required
            />
          </InputBox>
          <InputBox>
            <h2>대표 이미지</h2>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleImgChange}
              required
            />
            <div>
              <Image src={imgSrc} alt="" width={200} height={150}></Image>
            </div>
          </InputBox>
          <InputBox>
            <h2>내용</h2>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
            />
          </InputBox>
          <div>
            <Button type="submit">등록</Button>
            <Button onClick={() => router.push("/")}>취소</Button>
          </div>
        </FormStyled>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colors.background};
`;

const Contents = styled.div`
  margin: 0 auto;
  padding: 1.5rem 1rem;
  max-width: ${breakPoints.desktop}px;
`;

const PostHeader = styled.span<PostHeaderProps>`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;

  ${(p) =>
    p.category === "recruit" &&
    css`
      border-bottom: steelblue 5px solid;
    `}
`;

const FormStyled = styled.form`
  margin: 1.5rem 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 1rem;
  }
`;

const InputBox = styled.div`
  padding: 1rem;

  input {
    width: 250px;
    padding-left: 0.5rem;
  }

  textarea {
    width: 250px;
    padding-left: 0.5rem;
  }
`;
