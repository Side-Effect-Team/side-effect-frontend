import { Dispatch, MouseEvent, SetStateAction, useRef } from "react";
import { AlarmButton, AlarmDiv, AlarmIconDiv, AlarmCount } from "./styled";
import AlarmList from "./AlarmList";
import { useGetAlarmData } from "hooks/queries/useGetAlarmData";
import { useGetAlarmNum } from "hooks/queries/useGetAlarmNum";
import useOutsideClick from "hooks/common/useOutsideClick";

interface FromHeaderProps {
  openAlarm: boolean;
  setOpenAlarm: Dispatch<SetStateAction<boolean>>;
}
export default function Alarm({ openAlarm, setOpenAlarm }: FromHeaderProps) {
  const { data: alarmNum } = useGetAlarmNum();

  const { data: alarmData, Observer } = useGetAlarmData();

  const onClickOpenAlarm = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpenAlarm((prev) => !prev);
  };
  const AlarmListRef = useRef(null);
  useOutsideClick(AlarmListRef, () => setOpenAlarm(false));

  return (
    <>
      <AlarmDiv openAlarm={openAlarm} ref={AlarmListRef}>
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
