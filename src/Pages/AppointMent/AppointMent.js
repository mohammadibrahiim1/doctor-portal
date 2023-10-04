import React, { useState } from "react";
import AppointMentBanner from "./AppointMentBanner/AppointMentBanner";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";

const AppointMent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointMentBanner selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}></AppointMentBanner>
      {/* <AvailableAppointments
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}></AvailableAppointments> */}
    </div>
  );
};

export default AppointMent;
