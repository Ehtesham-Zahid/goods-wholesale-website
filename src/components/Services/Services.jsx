import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import SectionIntro from "../SectionIntro/SectionIntro";
import ServicePageCard from "../ServicePageCard/ServicePageCard";
import ContactSection from "../ContactSection/ContactSection";

import Service1Image from "../../assets/service-1.jpg";
import Service2Image from "../../assets/service-2.jpg";
import Service3Image from "../../assets/service-3.jpg";
import Service4Image from "../../assets/service-4.jpg";
import Service5Image from "../../assets/service-5.jpg";
import Service6Image from "../../assets/service-6.jpg";

const Services = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div>
      <Header />
      <SectionIntro mainText="Our Services" />
      <div className="flex my-20 gap-y-20 flex-col w-5/6 lg:w-3/4 mx-auto">
        <ServicePageCard
          direction="left"
          title="Climate Change Mitigation"
          desc="Our company plays a crucial role in helping clients navigate the complexities of climate change by offering expert guidance on potential exposures and tailored mitigation strategies. Understanding climate risks requires a deep dive into various environmental factors, regulatory requirements, and long-term impacts, all of which can be overwhelming. However, with our dedicated team of experts, you can rest assured that we’ll provide you with the insights and actionable strategies needed to safeguard your business and minimize climate-related risks. Schedule a call with our specialists, and we’ll help you develop effective solutions to tackle climate change challenges."
          image={Service1Image}
        />
        <ServicePageCard
          direction={`${isMobile ? "left" : "right"}`}
          title="Carbon Credits"
          desc="Our company assists clients in planning and executing strategies for the creation and certification of carbon credits, as well as procuring offsets. Navigating the carbon credit market can be complex, involving regulatory compliance, sustainability goals, and certification processes, but we make it seamless. From project inception to certification, our team ensures that every step is optimized for maximum impact and alignment with global standards. Let us help you reduce your carbon footprint and achieve your sustainability objectives. Book a consultation with us, and we'll guide you through every aspect of carbon credit creation and offset procurement."
          image={Service2Image}
        />{" "}
        <ServicePageCard
          direction="left"
          title="Coastal Protection"
          desc="Our company specializes in helping clients conceptualize and implement effective coastal protection strategies. Coastal protection involves addressing environmental challenges like erosion, rising sea levels, and storm surges, which can significantly impact coastal communities and infrastructure. We work closely with our clients to develop tailored solutions that not only protect the coast but also incorporate sustainable funding models to ensure long-term viability. Whether it’s securing funding or executing protection projects, our team is here to guide you through the entire process. Get in touch with us to start building resilient coastal protection strategies."
          image={Service3Image}
        />{" "}
        <ServicePageCard
          direction={`${isMobile ? "left" : "right"}`}
          title="Risk Management"
          desc="Our company helps clients identify and implement climate-change-related risk management strategies. Climate change poses significant risks to businesses, including extreme weather events, regulatory shifts, and resource scarcity. We work closely with clients to assess these risks and develop tailored strategies to mitigate their impact. From analyzing vulnerabilities to creating action plans, our team ensures that businesses are better prepared to adapt and thrive in the face of climate challenges. Reach out to us, and we'll guide you through the process of safeguarding your operations against climate-related risks."
          image={Service4Image}
        />
        <ServicePageCard
          direction="left"
          title="Agricultural Commodities"
          desc="Our company has been playing an integral part in agro commodities and has a handful of suppliers and imports of agro goods such as rice, soybeans, wheat and a few more items in play. Agro goods imports and exports are not easy as they require fumigation, customs, readiness, health checks and many other proceedings before they are shipped and to their rightful owner. With our firm, you need not worry as we can do everything for you, book a call with our team and we’ll sort everything out."
          image={Service5Image}
        />{" "}
        <ServicePageCard
          direction={`${isMobile ? "left" : "right"}`}
          title="Building Materials"
          desc="We’ve been an exporter, producer and wholesale seller of steel, concrete, wood, bricks, masonry, stone, rock wall, bond, and waterproofing materials for over eight years. And our team of professional architects, engineers and construction workers has done us proud. We chose the best employees to do our bid and the best producers to provide an outstanding grade of steel, sandstone, crushed bricks, whole bricks, lintels, Polished woods, Sal wood, planks, etc. All of our materials are made with premium quality, forever-lasting results."
          image={Service6Image}
        />
      </div>
      <ContactSection />
    </div>
  );
};

export default Services;
