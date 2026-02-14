import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import RolesSection from "../components/landing/RolesSection";
import HowItWorks from "../components/landing/HowItWorks";
import SecuritySection from "../components/landing/SecuritySection";
import CTASection from "../components/landing/CTASection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

const Landing = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <HowItWorks />
      <SecuritySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Landing;