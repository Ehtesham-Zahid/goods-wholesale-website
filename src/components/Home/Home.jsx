import AboutUsSection from "../AboutUsSection/AboutUsSection";
import ContactSection from "../ContactSection/ContactSection";
import Header from "../Header/Header";
import MainSection from "../MainSection/MainSection";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
};

export default Home;
