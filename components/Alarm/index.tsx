import { Dispatch, MouseEvent, SetStateAction } from "react";
import { AlarmButton, AlarmDiv, AlarmIconDiv, AlarmCount } from "./styled";
import AlarmList, { AlarmProps } from "./AlarmList";
import { useQuery } from "@tanstack/react-query";
import { ALARM_CHECK } from "./AlarmQurey";
import useToast from "@/hooks/useToast";
import useOutsideClick from "@/hooks/useOutsideClick";

interface FromHeaderProps {
  openAlarm: boolean;
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}
export default function Alarm({ openAlarm, setOpenAlarm }: FromHeaderProps) {
  const { addToast, deleteToast } = useToast();

  const { data: alarmList } = useQuery(["notice"], ALARM_CHECK, {
    onError: () => {
      addToast({
        type: "error",
        title: "error",
        content: "알람을 가져오지 못했습니다.",
      });
      deleteToast("unique-id");
    },
    retry: false,
  });
  // 읽지 않은 알람 갯수 세기
  const countAlarm = () => {
    if (alarmList) {
      return alarmList.data.filter((item: AlarmProps) => item.watched === false)
        .length;
    }
  };
  const count = countAlarm();

  const onClickOpenAlarm = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenAlarm((prev) => !prev);
  };

  return (
    <>
      <AlarmDiv openAlarm={openAlarm}>
        <AlarmIconDiv openAlarm={openAlarm} onClick={onClickOpenAlarm}>
          <AlarmButton />
          {count !== 0 && <AlarmCount>{count}</AlarmCount>}
        </AlarmIconDiv>
        {openAlarm && alarmList && (
          <AlarmList alarmList={alarmList.data} setOpenAlarm={setOpenAlarm} />
        )}
      </AlarmDiv>
    </>
  );
}
