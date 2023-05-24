import { Dispatch, MouseEvent, SetStateAction, useEffect } from "react";
import { AlarmButton, AlarmDiv, AlarmIconDiv, AlarmCount } from "./styled";
import AlarmList, { AlarmProps } from "./AlarmList";
import { useGetAlarmDataAll } from "@/hooks/queries/useGetAlarmDataAll";
import { useGetAlarmData } from "@/hooks/queries/useGetAlarmData";

interface FromHeaderProps {
  openAlarm: boolean;
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}
export default function Alarm({ openAlarm, setOpenAlarm }: FromHeaderProps) {
  const { data: alarmList } = useGetAlarmDataAll();
  const { data: alarmData, Observer } = useGetAlarmData();
  console.log(alarmData);
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
        {/* {openAlarm && alarmList && (
          <AlarmList alarmList={alarmList.data} setOpenAlarm={setOpenAlarm} />
        )} */}
        {openAlarm && alarmData && (
          <AlarmList
            alarmData={alarmData}
            setOpenAlarm={setOpenAlarm}
            Observer={Observer}
          />
        )}
      </AlarmDiv>
    </>
  );
}
