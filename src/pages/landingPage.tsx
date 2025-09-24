import HeroSection from "../components/sections/Hero";
import ServiceSection from "../components/sections/Service";
import WhyUsSection from "../components/sections/WhyUs";
import PortfolioSection from "../components/sections/Portfolio";
import CtaSection from "../components/sections/Cta";

function LandingPage() {
  return (
    <>
      <HeroSection />
      <div className="px-20">
        <ServiceSection />
        <WhyUsSection />
        <PortfolioSection />
        <CtaSection />
      </div>
    </>
  );
}

export default LandingPage;
