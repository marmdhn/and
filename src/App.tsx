import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/Hero";
import ServiceSection from "./components/sections/Service";

function App() {
  return (
    <div data-theme="mytheme" className="px-20">
      <Navbar />
      <HeroSection />
      <ServiceSection />
    </div>
  );
}

export default App;
