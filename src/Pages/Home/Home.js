import React from "react";
import ContactUs from "./Contactus/ContactUs";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import PatientFeedback from "./PatientFeedback/PatientFeedback";
import Services from "./Services/Services";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";

const Home = () => {
  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <PatientFeedback></PatientFeedback>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
