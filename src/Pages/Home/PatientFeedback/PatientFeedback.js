import React from "react";
import Feedback from "../Feedback/Feedback";

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/4gbvjcr/Mask-Group-7-2x-1.png" alt="Mask-Group-7-2x-1" border="0"></a> */}

const PatientFeedback = () => {
  const patientFeedbacks = [
    {
      id: 1,
      name: "Winson Herry",
      address: "california",
      Image: "https://i.ibb.co/Wp4KfSN/people-1-1-1.png",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 2,
      name: "Winson Herry",
      address: "california",
      Image: "https://i.ibb.co/Wp4KfSN/people-1-1-1.png",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      id: 3,
      name: "Winson Herry",
      address: "california",
      Image: "https://i.ibb.co/Wp4KfSN/people-1-1-1.png",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <div>

   <div className="flex justify-between items-center w-11/12 mx-auto mt-14" >
         
   <div className="text-start">
        <h2 className="text-primary font-bold">Testimonial</h2>
        <p className="text-accent pt-1">What Our Patients Says</p>
      </div>

      <div>
         <img src="https://i.ibb.co/4gbvjcr/Mask-Group-7-2x-1.png" alt="" srcset="" style={{height:'156px',width:'192px'}} />
      </div>
   </div>

      <div
        style={{ width: "1333px", height: "514px" }}
        className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  gap-6 mx-auto"
      >
        {patientFeedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback}></Feedback>
        ))}
      </div>
    </div>
  );
};

export default PatientFeedback;
