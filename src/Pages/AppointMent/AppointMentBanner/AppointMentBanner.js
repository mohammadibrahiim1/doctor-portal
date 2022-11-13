import React, { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';



const AppointMentBanner = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
  return (
    <div>
      <div className="hero mx-auto bg-[url('https://i.ibb.co/KWdnryZ/landing-bg.png')] bg-cover" style={{height:'700px',width:'1363px'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/v4zhwnG/chair-1.png" alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="border rounded shadow-xl">
          <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate} />
          </div>
    
        </div>
   
      </div>
      <div className="text-center text-primary text-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">
        
        <p>Available Appointments on {format(selectedDate,'PPPP')} </p>
    
    </div>
    </div>
  );
};

export default AppointMentBanner;
