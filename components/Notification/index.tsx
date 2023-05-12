import { Container, Contents, Title, Wrapper } from "./styled";

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
  boardId: number;
  category: string;
  boardTitle: string;
}
interface Props {
  notification: NotificationProps;
}

export default function Notification({ notification }: Props) {
  const onClickAlarm = () => {};
  return (
    <Container>
      {notification.alarms.map((el) => (
        <Wrapper key={el.id} onClick={onClickAlarm}>
          <Title>{el.title}</Title>
          <Contents>{el.boardTitle}</Contents>
        </Wrapper>
      ))}
    </Container>
  );
}
