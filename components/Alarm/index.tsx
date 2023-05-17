import { MouseEvent, useEffect, useRef, useState } from "react";
import { AlarmButton, AlarmDiv, AlarmIconDiv, GetAlarm } from "./styled";
import axios from "axios";
import AlarmList, { AlarmProps } from "./AlarmList";
import useOutsideClick from "@/hooks/useOutsideClick";

export default function Alarm() {
  const [openAlarm, setOpenAlarm] = useState<boolean>(false);
  const [alarmList, setAlarmList] = useState<AlarmProps | null>(null);
  const AlarmListRef = useRef(null);
  useOutsideClick(AlarmListRef, () => setOpenAlarm(false));

  const onClickAlarm = () => {
    setOpenAlarm((prev) => !prev);
  };
  const [token, setToken] = useState("");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const alarmListCheck = async () => {
    // try {
    //   const response = await axios.get(
    //     `https://417359b3-a6b2-453e-bb09-1371913815a7.mock.pstmn.io/alarmlist`,
    //     config,
    //   );
    //   setAlarmList(response.data);
    //   console.log("알람리스트 받기");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   if (token) {
  //     setToken(token);
  //     alarmListCheck();
  //   }
  // }, []);

  // 읽지 않은 알람 갯수 세기
  const countAlarm = () => {
    if (alarmList) {
      return alarmList.alarms.filter((item) => item.watched === false).length;
    }
  };

  const count = countAlarm();
  return (
    <>
      <AlarmDiv onClick={onClickAlarm} openAlarm={openAlarm} ref={AlarmListRef}>
        <AlarmIconDiv openAlarm={openAlarm}>
          <AlarmButton />
          {count && <GetAlarm>{count}</GetAlarm>}
        </AlarmIconDiv>
        {openAlarm && (
          <AlarmList alarmList={alarmList} setOpenAlarm={setOpenAlarm} />
        )}
      </AlarmDiv>
    </>
  );
}
