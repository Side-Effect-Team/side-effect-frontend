import { useEffect, useState } from "react";
import { AlarmButton, AlarmDiv, GetAlarm } from "./styled";
import axios from "axios";
import AlarmList, { AlarmProps } from "./AlarmList";

export default function Alarm() {
  const [openAlarm, setOpenAlarm] = useState(false);
  const [alarmList, setAlarmList] = useState<AlarmProps | null>(null);
  const onClickAlarm = async () => {
    setOpenAlarm((prev) => !prev);
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const alarmListCheck = async () => {
      try {
        const response = await axios.get(
          `https://417359b3-a6b2-453e-bb09-1371913815a7.mock.pstmn.io/alarmlist`,
          config,
        );
        setAlarmList(response.data);
        console.log("알람리스트 받기");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    alarmListCheck();
  }, []);

  // 읽지 않은 알람 갯수 세기
  const countAlarm = () => {
    if (alarmList) {
      return alarmList.alarms.filter((item) => item.watched === false).length;
    }
  };
  const count = countAlarm();
  console.log(count);
  return (
    <>
      <AlarmDiv onClick={onClickAlarm}>
        <AlarmButton />
        {count && <GetAlarm>{count}</GetAlarm>}
      </AlarmDiv>
      {openAlarm && (
        <AlarmList alarmList={alarmList} setOpenAlarm={setOpenAlarm} />
      )}
    </>
  );
}
