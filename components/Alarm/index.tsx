import { MouseEvent, useEffect, useRef, useState } from "react";
import { AlarmButton, AlarmDiv, AlarmIconDiv, AlarmCount } from "./styled";
import axios from "axios";
import AlarmList, { AlarmProps } from "./AlarmList";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useQuery } from "@tanstack/react-query";
import { ALARM_CHECK } from "./AlarmQurey";
import useToast from "@/hooks/useToast";

export default function Alarm() {
  const [openAlarm, setOpenAlarm] = useState<boolean>(false);
  const AlarmListRef = useRef(null);
  useOutsideClick(AlarmListRef, () => setOpenAlarm(false));
  const { addToast, deleteToast } = useToast();

  const onClickOpenAlarm = () => {
    setOpenAlarm((prev) => !prev);
  };

  const { data: alarmList, isError } = useQuery(["notice"], ALARM_CHECK);

  // 읽지 않은 알람 갯수 세기
  const countAlarm = () => {
    if (alarmList) {
      return alarmList.data.filter((item: AlarmProps) => item.watched === false)
        .length;
    }
  };
  const count = countAlarm();

  if (isError) {
    addToast({
      type: "error",
      title: "error",
      content: "알람을 가져오지 못했습니다.",
    });
    deleteToast("unique-id");
  }

  return (
    <>
      <AlarmDiv
        onClick={onClickOpenAlarm}
        openAlarm={openAlarm}
        ref={AlarmListRef}
      >
        <AlarmIconDiv openAlarm={openAlarm}>
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
