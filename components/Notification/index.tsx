import { Dispatch, SetStateAction } from "react";
import {
  CloseButton,
  Container,
  Contents,
  Header,
  HeaderTitle,
  Title,
  Wrapper,
} from "./styled";
import { EmptyMessage } from "../Header/styled";
import { useRouter } from "next/router";

export interface NotificationProps {
  lastId: number;
  alarmNum: number;
  alarms: AlarmProps[];
}

export interface AlarmProps {
  id: number;
  type: string;
  watched: boolean;
  title: string;
  createAt: string;
  boardId: string;
  category: string;
  boardTitle: string;
}
interface Props {
  notification: NotificationProps | null;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function Notification({ notification, setIsActive }: Props) {
  const router = useRouter();
  const onClickAlarm = (category: string, boardId: string) => () => {
    router.push(`/${category}/${boardId}`);
    setIsActive((prev) => !prev);
  };
  const onClickCloseAlarm = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle>알림</HeaderTitle>
        <CloseButton onClick={onClickCloseAlarm} />
      </Header>
      {notification ? (
        notification.alarms.map((el) => (
          <Wrapper key={el.id} onClick={onClickAlarm(el.category, el.boardId)}>
            <Title>{el.title}</Title>
            <Contents>{el.boardTitle}</Contents>
          </Wrapper>
        ))
      ) : (
        <EmptyMessage>알림창이 비어있어요</EmptyMessage>
      )}
    </Container>
  );
}
