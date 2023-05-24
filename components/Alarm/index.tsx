import { Dispatch, MouseEvent, SetStateAction } from "react";
import { AlarmButton, AlarmDiv, AlarmIconDiv, AlarmCount } from "./styled";
import AlarmList, { AlarmProps } from "./AlarmList";
import { useGetAlarmList } from "@/hooks/queries/useGetAlarmList";

interface FromHeaderProps {
  openAlarm: boolean;
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}
export default function Alarm({ openAlarm, setOpenAlarm }: FromHeaderProps) {
  const { data: alarmList } = useGetAlarmList();
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
