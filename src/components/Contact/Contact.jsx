import ContactSection from "../ContactSection/ContactSection";
import Header from "../Header/Header";
import MapSection from "../MapSection/MapSection";
import SocialBanner from "../SocialBanner/SocialBanner";

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactSection contactPage={true} />
      <SocialBanner />
      <MapSection />
    </div>
  );
};

export default Contact;
