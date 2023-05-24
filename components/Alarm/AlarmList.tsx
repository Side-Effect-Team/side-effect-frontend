import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import {
  CloseButton,
  Container,
  Contents,
  Date,
  DeleteButton,
  EmptyMessage,
  Header,
  HeaderTitle,
  RowWrapper,
  Title,
  Wrapper,
} from "./styled";
import { useRouter } from "next/router";
import { useQueryClient } from "@tanstack/react-query";
import { useReadAlarm } from "@/hooks/mutations/useReadAlarm";
import { useDeleteAlarm } from "@/hooks/mutations/useDeleteAlarm";
// export interface AlarmProps {
//   lastId: number;
//   alarmNum: number;
//   alarms: AlarmProps[];
// }

export interface AlarmProps {
  id: number;
  watched: boolean;
  title: string;
  contents: string;
  createAt: string;
  link: string;
}
interface AlarmListProps {
  alarmList: AlarmProps[];
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}

export default function AlarmList({ alarmList, setOpenAlarm }: AlarmListProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const onClickCloseAlarm = (e: MouseEvent<SVGAElement>) => {
    e.stopPropagation();
    setOpenAlarm(false);
  };
  // 알람 읽기
  const readMutate = useReadAlarm();

  const onClickReadAlarm =
    (link: string, id: number) => async (e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      router.push(`${link}`);
      setOpenAlarm(false);
      readMutate(id);
    };

  // 알람 삭제
  const deleteMutate = useDeleteAlarm();

  const onClickDeleteAlarm =
    (id: number) => async (e: MouseEvent<SVGAElement>) => {
      e.stopPropagation();
      deleteMutate(id);
    };
  return (
    <Container>
      <Header>
        <HeaderTitle>알림</HeaderTitle>
        <CloseButton onClick={onClickCloseAlarm} />
      </Header>
      {alarmList && alarmList.length !== 0 ? (
        alarmList.map((alarm) => (
          <Wrapper
            watched={alarm.watched}
            key={alarm.id}
            onClick={onClickReadAlarm(alarm.link, alarm.id)}
          >
            <RowWrapper>
              <Title>{alarm.contents}</Title>
              <DeleteButton onClick={onClickDeleteAlarm(alarm.id)} />
            </RowWrapper>
            <RowWrapper>
              <Contents>{alarm.title}</Contents>
              <Date>{alarm.createAt}</Date>
            </RowWrapper>
          </Wrapper>
        ))
      ) : (
        <EmptyMessage>알림창이 비어있어요</EmptyMessage>
      )}
    </Container>
  );
}
