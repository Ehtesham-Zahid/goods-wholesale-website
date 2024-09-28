import ContactSection from "../ContactSection/ContactSection";
import Header from "../Header/Header";
import MandateSection from "../MandateSection/MandateSection";
import SectionIntro from "../SectionIntro/SectionIntro";
import StorySection from "../StorySection/StorySection";

const About = () => {
  return (
    <div>
      <Header />
      <SectionIntro mainText="About Us" />
      <StorySection />
      <MandateSection />
      <ContactSection />
    </div>
  );
};

export default About;
