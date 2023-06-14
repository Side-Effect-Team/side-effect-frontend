import { useAppSelector } from "store/hooks";
import { HeartFillIcon, HeartWrapper } from "./styled";
import { MouseEvent, useEffect, useState } from "react";
import { UseMutateFunction } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface HeartButtonProps {
  isLike: boolean;
  id: number;
  likeMutate: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    number,
    unknown
  >;
}
export default function HeartButton({
  isLike,
  id,
  likeMutate,
}: HeartButtonProps) {
  const { token } = useAppSelector((state) => state.auth);
  const [heartLike, setHeartLike] = useState(isLike || false);

  const onClickHeart = async (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (token) {
      likeMutate(id, {
        onSuccess: (res) => {
          if (res.data.message.includes("추천했습니다")) {
            setHeartLike(true);
          } else setHeartLike(false);
        },
      });
    } else alert("로그인 후 이용가능합니다.");
  };
  useEffect(() => {
    setHeartLike(false);
  }, []);
  return (
    <HeartWrapper isLike={isLike} onClick={onClickHeart}>
      <HeartFillIcon
        islike={isLike.toString()}
        heartlike={heartLike.toString()}
      />
    </HeartWrapper>
  );
}
