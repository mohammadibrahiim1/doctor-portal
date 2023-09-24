import React, { useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import { useGetAppointmentsQuery } from "../../../redux/features/api/appoinmentsApi/appoinmentsApi";

const AvailableAppointments = ({ selectedDate }) => {
  console.log(selectedDate);
  // const [appointments, setAppointments] = useState([]);
  const { data } = useGetAppointmentsQuery();
  console.log(data);
  const appointments = data?.data;
  console.log(appointments);
  const [treatMent, setTreatMent] = useState({});

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 mx-auto gap-4 ">
        {appointments?.map((appointment) => (
          <AppointmentOption
            key={appointment.id}
            appointment={appointment}
            setTreatMent={setTreatMent}
          ></AppointmentOption>
        ))}
      </div>

      {treatMent && (
        <AppointmentModal
          treatMent={treatMent}
          selectedDate={selectedDate}
          setTreatMent={setTreatMent}
        ></AppointmentModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
