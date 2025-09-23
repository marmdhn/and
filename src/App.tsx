import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/sections/Hero";

function App() {
  return (
    <div data-theme="mytheme" className="px-20">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
