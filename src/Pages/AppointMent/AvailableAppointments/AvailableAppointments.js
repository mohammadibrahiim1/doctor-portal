import React, { useEffect, useState } from 'react';
import AppointmentOption from '../AppointmentOption/AppointmentOption';

const AvailableAppointments = () => {
    const [appointments,setAppointments] = useState([]);

    useEffect(()=>{
        fetch('appointment.json')
        .then(res => res.json())
        .then(data => {
            setAppointments(data);
            console.log(data)});
    },[])
     
    return (
        <div>
           <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-11/12 mx-auto gap-4 '>
           {
                appointments.map((appointment)=> <AppointmentOption key={appointment.id} appointment={appointment}></AppointmentOption>)
            }
           </div>
        </div>
    );
};

export default AvailableAppointments;