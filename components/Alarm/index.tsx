import { Dispatch, MouseEvent, SetStateAction } from "react";
import { AlarmButton, AlarmDiv, AlarmIconDiv, AlarmCount } from "./styled";
import AlarmList from "./AlarmList";
import { useGetAlarmData } from "@/hooks/queries/useGetAlarmData";
import { useGetAlarmNum } from "@/hooks/queries/useGetAlarmNum";

interface FromHeaderProps {
  openAlarm: boolean;
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}
export default function Alarm({ openAlarm, setOpenAlarm }: FromHeaderProps) {
  const { data: alarmNum } = useGetAlarmNum();

  const { data: alarmData, Observer } = useGetAlarmData();
  console.log(alarmData);

  const onClickOpenAlarm = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenAlarm((prev) => !prev);
  };
  return (
    <>
      <AlarmDiv openAlarm={openAlarm}>
        <AlarmIconDiv openAlarm={openAlarm} onClick={onClickOpenAlarm}>
          <AlarmButton />
          {alarmNum?.data !== 0 && <AlarmCount>{alarmNum?.data}</AlarmCount>}
        </AlarmIconDiv>
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
