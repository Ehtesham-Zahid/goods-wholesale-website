import Service1Image from "../../assets/service-1.jpg";
import Service2Image from "../../assets/service-2.jpg";
import Service3Image from "../../assets/service-3.jpg";
import Service4Image from "../../assets/service-4.jpg";
import Service5Image from "../../assets/service-5.jpg";
import Service6Image from "../../assets/service-6.jpg";

import ServiceCard from "../ServiceCard/ServiceCard";

const ServicesSection = () => {
  return (
    <section className="my-5 rounded-3xl   py-10">
      <div className="w-5/6 md:w-3/4 mx-auto">
        <p className="mb-10 text-center text-sky-500 text-4xl font-bold">
          OUR SERVICES
        </p>
        <div className="flex justify-around flex-wrap gap-10">
          <ServiceCard
            title="Climate Change"
            desc="We guide clients in understanding climate change related exposure and possible mitigation strategies"
            image={Service1Image}
          />
          <ServiceCard
            title="Carbon Credits"
            desc="We help clients plan strategies and execute projects to create and certify carbon credits, and procure offsets."
            image={Service2Image}
          />{" "}
          <ServiceCard
            title="Coastal Protection"
            desc="We assist to conceptualise and execute coastal protection strategies, often together with funding models."
            image={Service3Image}
          />{" "}
          <ServiceCard
            title="Risk Management"
            desc="We help identify climate-change related risk-management strategies"
            image={Service4Image}
          />{" "}
          <ServiceCard
            title="Agricultural Commodities"
            desc="We specialize in agro imports and exports like rice and wheat, handling everything from customs to health checks. Book a call, and we’ll take care of it all."
            image={Service5Image}
          />{" "}
          <ServiceCard
            title="Building Materials"
            desc="For over eight years, we've supplied premium construction materials like steel, wood, and bricks, backed by a skilled team ensuring quality and durability."
            image={Service6Image}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
