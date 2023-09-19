import React from "react";
import ContactUs from "./Contactus/ContactUs";
// import MakeAppointment from "./MakeAppointment/MakeAppointment";
import PatientFeedback from "./PatientFeedback/PatientFeedback";
import Services from "./Services/Services";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import About from "../About/About";
import ClientLogo from "../../Components/HomePageHeader/ClientLogo/ClientLogo";
import SpecialCare from "../../Components/SpecialCare/SpecialCare";

const Home = () => {
  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <Services></Services>
      <About></About>
      <ClientLogo></ClientLogo>
      <SpecialCare></SpecialCare>
      {/* <MakeAppointment></MakeAppointment> */}
      <PatientFeedback></PatientFeedback>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
