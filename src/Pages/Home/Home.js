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
import ProfessionalDoctors from "../../Components/ProfessionalDoctors/ProfessionalDoctors";

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
      <ProfessionalDoctors></ProfessionalDoctors>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
