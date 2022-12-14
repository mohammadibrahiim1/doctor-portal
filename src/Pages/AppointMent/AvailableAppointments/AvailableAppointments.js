import React, { useEffect, useState } from "react";
import AppointmentModal from "../AppointmentModal/AppointmentModal";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  console.log(selectedDate);
  const [appointments, setAppointments] = useState([]);
  const [treatMent, setTreatMent] = useState({});

  useEffect(() => {
    fetch("appointment.json")
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 mx-auto gap-4 ">
        {appointments.map((appointment) => (
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
