import React, { useEffect, useState } from "react";
import {
  Container,
  ContentsEditWrapper,
  TapMenu,
  TapWrapper,
} from "components/pages/mypage/styled";
import useToast from "hooks/common/useToast";
import MypageEdit from "@/pageComponents/mypageEdit";
import { getProfileData } from "apis/UserAPI";
import { withAuth } from "components/hocs/withAuth";
export interface FormData {
  nickname: string;
}
export interface MypageEditProps {
  data: MypageEditDataProps;
}
export interface MypageEditDataProps {
  introduction: string;
  tags: string[];
  career: string;
  position: string;
  githubUrl: string;
  blogUrl: string;
  portfolioUrl: string;
  imgUrl: string;
  nickname: string;
}

function ProfileEdit() {
  const { addToast } = useToast();

  const [data, setData] = useState({
    introduction: "",
    tags: [],
    career: "",
    position: "",
    githubUrl: "",
    blogUrl: "",
    portfolioUrl: "",
    imgUrl: "",
    nickname: "",
  });

  useEffect(() => {
    getProfileData()
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
        addToast({
          type: "error",
          title: "에러 발생!",
          content: "정보를 가져오지 못했습니다.",
        });
      });
  }, []);

  return (
    <Container>
      <TapWrapper>
        <TapMenu isActive>프로필 수정</TapMenu>
      </TapWrapper>
      <ContentsEditWrapper>
        <MypageEdit data={data} />
      </ContentsEditWrapper>
    </Container>
  );
}

export default withAuth(ProfileEdit);
