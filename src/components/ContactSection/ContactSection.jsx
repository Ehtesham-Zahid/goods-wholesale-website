import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import InstaLogo from "../../assets/insta.svg";
import FacebookLogo from "../../assets/fb.svg";
import XLogo from "../../assets/x.svg";
import WhatsappLogo from "../../assets/whatsapp.svg";

import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="bg-[#fff6e2] py-24">
      <div className="w-5/6 md:w-3/4 mx-auto  ">
        <p className="text-center text-[#c8ae77] font-bold mb-5">CONTACT</p>
        <p className="text-center mb-14 text-4xl leading-relaxed contact-text">
          Get In Touch
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <div className="col-span-1  ">
            <div className="flex items-start mb-8">
              <LocationOnIcon className="me-6 mt-1" />
              <p>
                OFFICE NO 301, FISAL ABDULLA SALEH AL GURG SHEESHA FACTORY
                BUILDING, OUD MEHTA, DUBAI - UAE.
              </p>
            </div>
            <div className="flex items-center mb-8">
              <EmailIcon className="me-6" />
              <p className="text-lg">info@niyatwg.com</p>
            </div>
            <div className="flex items-center mb-8">
              <LocalPhoneIcon className="me-6" />
              <p className="text-lg">+971 58 117 6645</p>
            </div>
            <hr className="border  border-[#966c11] mb-10" />
            <p className="text-2xl mb-8">Follow us on Social Media</p>
            <div className="flex flex-wrap justify-start gap-5 mb-8">
              <div className="flex items-center">
                <img src={FacebookLogo} className="w-8 me-2" />
                <p className="bg-gray-200 py-1 px-2.5 rounded-sm">Follow</p>
              </div>
              <div className="flex items-center">
                <img src={XLogo} className="w-8 me-2" />
                <p className="bg-gray-200 py-1 px-2.5 rounded-sm">Follow</p>
              </div>
              <div className="flex items-center">
                <img src={InstaLogo} className="w-8 me-2" />
                <p className="bg-gray-200 py-1 px-2.5 rounded-sm">Follow</p>
              </div>
              <div className="flex items-center">
                <img src={WhatsappLogo} className="w-8 me-2" />
                <p className="bg-gray-200 py-1 px-2.5 rounded-sm">Follow</p>
              </div>
            </div>
          </div>
          <form className="col-span-1 lg:col-span-2 flex flex-col lg:pl-16">
            <input
              placeholder="Name"
              className="p-4 text-lg border-b-2 mb-6 bg-transparent outline-none"
            />
            <input
              placeholder="Email Address"
              className="p-4 text-lg border-b-2 mb-6 bg-transparent outline-none"
            />{" "}
            <textarea
              rows="4"
              cols="50"
              placeholder="Message"
              className="p-4 text-lg border-b-2 mb-8 bg-transparent outline-none"
            />
            <div className="flex justify-end">
              <button className="py-3 px-6 text-lg tracking-wider bg-[#cd8c00] text-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
