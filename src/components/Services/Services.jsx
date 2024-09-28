import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import SectionIntro from "../SectionIntro/SectionIntro";
import ServicePageCard from "../ServicePageCard/ServicePageCard";

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div>
      <Header />
      <SectionIntro mainText="Our Services" />
      <div className="flex mt-20 gap-y-20 flex-col w-5/6 lg:w-3/4 mx-auto">
        <ServicePageCard direction="left" />
        <ServicePageCard direction={`${isMobile ? "left" : "right"}`} />{" "}
        <ServicePageCard direction="left" />{" "}
        <ServicePageCard direction={`${isMobile ? "left" : "right"}`} />
        <ServicePageCard direction="left" />{" "}
        <ServicePageCard direction={`${isMobile ? "left" : "right"}`} />
      </div>
    </div>
  );
};

export default Services;
