import React from "react";
import ContactUs from "./Contactus/ContactUs";
// import MakeAppointment from "./MakeAppointment/MakeAppointment";
import PatientFeedback from "./PatientFeedback/PatientFeedback";
import Services from "./Services/Services";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import About from "../About/About";
import ClientLogo from "../../Components/HomePageHeader/ClientLogo/ClientLogo";
import SpecialCare from "../../Components/SpecialCare/SpecialCare";
import WhyChoosePharma from "../../Components/WhyChoosePharma/WhyChoosePharma";

const Home = () => {
  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <Services></Services>
      <About></About>
      <ClientLogo></ClientLogo>
      <SpecialCare></SpecialCare>
      <PatientFeedback></PatientFeedback>
      <WhyChoosePharma></WhyChoosePharma>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
