import React from "react";
import { useGetServiceByIdQuery } from "../../redux/features/api/servicesApi/servicesApi";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data } = useGetServiceByIdQuery(id);
  console.log(data?.data);
  return <div></div>;
};

export default ServiceDetails;
