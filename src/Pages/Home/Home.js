import React from "react";
import PatientFeedback from "./PatientFeedback/PatientFeedback";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import About from "../../Components/About/About";
import ClientLogo from "../../Components/HomePageHeader/ClientLogo/ClientLogo";
import SpecialCare from "../../Components/SpecialCare/SpecialCare";
import WhyChoosePharma from "../../Components/WhyChoosePharma/WhyChoosePharma";
import ProfessionalDoctors from "../../Components/ProfessionalDoctors/ProfessionalDoctors";
import LatestArticles from "../../Components/LatestArticles/LatestArticles";
import OurServices from "../../Components/OurServices/OurServices";

const Home = () => {
  return (
    <div>
      <HomePageHeader></HomePageHeader>
      <OurServices></OurServices>
      <About></About>
      <ClientLogo></ClientLogo>
      <SpecialCare></SpecialCare>
      <PatientFeedback></PatientFeedback>
      <WhyChoosePharma></WhyChoosePharma>
      <ProfessionalDoctors></ProfessionalDoctors>
      <LatestArticles></LatestArticles>
    </div>
  );
};

export default Home;
