import React from "react";
import { useGetServiceByIdQuery } from "../../redux/features/api/servicesApi/servicesApi";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const { data } = useGetServiceByIdQuery(id);
  console.log(data?.data);
  const service = data?.data;
  const { image, icon, service_name, sub_details, health_advice, quote, type_of_service } = service ? service : {};
  return (
    <div>
      <div>
        <img className=" w-[1744px] mx-auto my-12" src={"https://i.ibb.co/gvqKrkx/Photo-12.png"} alt="" srcset="" />
      </div>
      <div className="w-[590px] mx-auto">
        <div className="flex gap-1">
          <img className="" src={icon} alt="" srcset="" />
          <p className="text-gray-900 font-sans font-semibold text-xl">{service_name}</p>
        </div>
        <div>
          <p className="text-sm font-sans text-[#545454] font-semibold py-[23px]">{sub_details}</p>

          <h1 className="text-3xl text-[#1c1c1c] font-semibold font-sans">The perfect Health for all</h1>
          <div>
            {health_advice?.map((advice) => (
              <>
                <h1 className="text-sm text-[#565656] font-semibold font-sans py-5 leading-7">{advice?.title}</h1>
                <ul>
                  {advice?.health_advice_list?.map((list) => (
                    <li className=" text-[#0152A8] list-disc font-sans w-1/2 mx-auto ">{list.advice_name}</li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </div>
        <div className="my-5">
          <img className="w-[590px]" src={image} alt="" srcset="" />
          <p className="text-sm font-sans text-[#545454] text-center">doctor with patient </p>
        </div>
        <div>
          <h1 className="text-3xl text-[#1c1c1c] font-semibold font-sans"> People Trust Farma</h1>
          <p className="bg-[#DCEDFE] text-[#0152a8] text-[18px] p-5 font-sans font-semibold my-5">{quote}</p>
        </div>

        <div>
          <h1 className="text-3xl text-[#1c1c1c] font-semibold font-sans py-2">Feel Like Home With Best Service</h1>
          <div>
            {type_of_service?.map((srvc) => (
              <>
                <div className="text-[#545454] font-sans font-semibold py-4">{srvc.text_1}</div>
                <div>
                  <ul>
                    {srvc.service_list.map((srvc_list) => (
                      <>
                        <li className=" text-[#0152A8] list-disc font-sans w-3/4 mx-auto ">
                          {" "}
                          {srvc_list.service_title}{" "}
                        </li>
                      </>
                    ))}
                  </ul>
                </div>
                <div className="text-[#545454] font-sans font-semibold py-4">{srvc.text_2}</div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
