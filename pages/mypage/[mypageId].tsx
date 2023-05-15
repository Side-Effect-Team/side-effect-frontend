import Profile from "@/components/pages/mypage/Profile";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MypageProps } from ".";
import styled from "styled-components";
import { theme } from "@/styles/Theme";

export default function MyPageId() {
  const router = useRouter();
  const [data, setData] = useState<MypageProps | null>(null);
  useEffect(() => {
    const id = router.query.mypageId;
    if (id === localStorage.getItem("id")) {
      router.push(`/mypage`);
      return;
    }
    const fetchData = async () => {
      if (!id) return;
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/user/mypage/${id}`,
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [router.query.mypageId]);
  return (
    <>
      {data && (
        <Wrapper>
          <Profile {...data} />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  max-width: ${theme.sizes.desktop};
  padding: 1rem;
`;
