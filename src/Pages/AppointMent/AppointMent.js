import React from "react";
import AppointMentBanner from "./AppointMentBanner/AppointMentBanner";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";

const AppointMent = () => {
  return (
    <div>
      <AppointMentBanner></AppointMentBanner>
      <AvailableAppointments></AvailableAppointments>
    </div>
  );
};

export default AppointMent;
