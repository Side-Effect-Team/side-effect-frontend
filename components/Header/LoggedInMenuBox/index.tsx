import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Alarm from "@/components/Alarm";
import { useAppSelector } from "@/store/hooks";
import { useRef, useState } from "react";
import useOutsideClick from "@/hooks/common/useOutsideClick";
import { Container, ImgContainer } from "./styled";
import { getMypageData } from "@/apis/UserAPI";

export default function LoggedInMenuBox() {
  const AlarmListRef = useRef(null);
  const [openAlarm, setOpenAlarm] = useState(false);
  const { token } = useAppSelector((state) => state.auth);
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["userProfileImg"],
    queryFn: getMypageData,
  });

  useOutsideClick(AlarmListRef, () => setOpenAlarm(false));

  return (
    <div ref={AlarmListRef}>
      {token && (
        <Container onClick={() => router.push("/mypage")}>
          <ImgContainer>
            {data?.data.imgUrl ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/user/image/${data?.data.imgUrl}`}
                alt={`${data.data.nickname}의 프로필 이미지`}
                width={35}
                height={35}
                priority
              />
            ) : (
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/user/image/UserDefaultBackground.png`}
                alt="기본 유저 이미지"
                width={35}
                height={35}
                priority
              />
            )}
          </ImgContainer>
          <Alarm openAlarm={openAlarm} setOpenAlarm={setOpenAlarm} />
        </Container>
      )}
    </div>
  );
}
