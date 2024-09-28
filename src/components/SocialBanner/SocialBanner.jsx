import InstaLogo from "../../assets/insta.svg";
import FacebookLogo from "../../assets/fb.svg";
import XLogo from "../../assets/x.svg";
import WhatsappLogo from "../../assets/whatsapp.svg";

const SocialBanner = () => {
  return (
    <div className="bg-sky-400 py-8 rounded-xl my-2">
      <div className="w-5/6 md:w-3/4 mx-auto flex flex-col gap-y-5 sm:flex-row justify-between items-start sm:items-center  ">
        <p className=" text-4xl text-white font-semibold">Follow Us</p>
        <div className="flex items-center flex-wrap   gap-5   ">
          <div className="flex items-center">
            <img src={FacebookLogo} className="w-10 me-2" />
          </div>
          <div className="flex items-center">
            <img src={XLogo} className="w-10 me-2" />
          </div>
          <div className="flex items-center">
            <img src={InstaLogo} className="w-10 me-2" />
          </div>
          <div className="flex items-center">
            <img src={WhatsappLogo} className="w-10 me-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBanner;
