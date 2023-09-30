import React from "react";

const contactInfo = [
  // https://i.ibb.co/RPWnmjb/Icon-2.png
  // https://i.ibb.co/DYCTCb2/Icon-1.png
  // https://i.ibb.co/d5qNC21/Icon.png
  {
    id: 1,
    title: "Address",
    location: "209 North Dunbar St.Santa Monica, CA 90403",
    icon: "https://i.ibb.co/d5qNC21/Icon.png",

  },
  {
    id: 2,
    title: "Call Us",
    location: "(+22) 123 - 4567 - 900 (+22) 123 - 4567 - 901",
    icon: 'https://i.ibb.co/RPWnmjb/Icon-2.png'
  },
  {
    id: 3,
    title: "E-mail Us",
    location: "support@doctorate.com yourmail@gmail.com",
    icon: 'https://i.ibb.co/DYCTCb2/Icon-1.png'
  },
]

const ContactUs = () => {
  return (
    <div>
      <section>
        <header>
          <header className='error_bg_img' >
            <h1 className='text-[#000] font-semibold font-sans  text-5xl text-center py-[158px] w-[552px] mx-auto  ' >We Are Ready To Assist
              You In 24x7</h1>
          </header>
        </header>

        <div className="w-[1200px] mx-auto " >
          <header className="text-center">
            <button className="lato" >contact us</button>
            <h2 className="text-[#1c1c1c] font-semibold font-sans text-3xl" >Get In Touch With Us!</h2>
          </header>

          <div>
            <div className="grid grid-cols-3 justify-center items-center gap-5 " >
              {contactInfo.map(contact => <>

                <div>
                  <div className="border py-[61px] px-[91px] text-center">
                    <img className="w-[85px] h-[85px] mx-auto" src={contact.icon} alt="" srcset="" />
                    <h1 className="text-[20px] font-semibold text-[#000] font-sans py-2" >{contact.title}</h1>
                    <h1 className="text-[13px] font-semibold text-[#7c7c7c] font-sans">{contact.location}</h1>
                  </div>
                </div>
              </>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
