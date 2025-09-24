import HeroSection from "../components/sections/Hero";
import ServiceSection from "../components/sections/Service";
import WhyUsSection from "../components/sections/WhyUs";
import PortfolioSection from "../components/sections/Portfolio";
import CtaSection from "../components/sections/Cta";

function LandingPage() {
  return (
    <div className="px-20">
      <HeroSection />
      <div className="px-20">
        <ServiceSection />
        <WhyUsSection />
        <PortfolioSection />
        <CtaSection />
      </div>
    </div>
  );
}

export default LandingPage;
