import AboutImage from "../../assets/about-2.jpg";

import "./SectionIntro.css";

const SectionIntro = () => {
  return (
    <section className="section-intro rounded-3xl   bg-no-repeat  bg-center bg-cover  h-[480px] my-2 flex justify-start pl-44 items-center">
      <div className="p-24   w-fit text-bg">
        <p className="text-7xl font-bold text-white">About Us</p>
      </div>
    </section>
  );
};

export default SectionIntro;
