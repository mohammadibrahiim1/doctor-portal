import { format } from "date-fns";
import React from "react";

const AppointmentModal = ({ treatMent, setTreatMent, selectedDate }) => {
  console.log(treatMent);
  console.log(selectedDate);
  const { name, slots } = treatMent;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const patientName = form.name.value;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const email = form.email.value;
    // console.log(phone, email, slot, name);

    const booking = {
      appointmentDate:selectedDate,
      treatMent:name,
      patientName,
       email,
       slot,
       phone,
    };
    setTreatMent(null)
    console.log(booking);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center">{name}</h3>
          <form
            onSubmit={handleBooking}
            action=""
            className="text-center grid grid-cols-1 gap-3 mt-6"
          >
            <input
              type="text"
              name="date"
              value={format(selectedDate, "PPPP")}
              className="input input-bordered input-sm w-full"
            />
            <select
              className=" input input-bordered input-sm w-full"
              name="slot"
            >
              {slots?.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="full name"
              name="name"
              className="input input-bordered input-sm w-full"
            />
            <input
              type="text"
              placeholder="phone number"
              name="phone"
              className="input input-bordered input-sm w-full"
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered input-sm w-full"
            />

            <br />
            <input
              type="submit"
              className=" border rounded cursor-pointer btn-accent w-full"
              value="submit"
              style={{ height: "2.2rem", width: "full" }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
