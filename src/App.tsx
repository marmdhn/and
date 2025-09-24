import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import KataKopiPage from "./pages/kataKopi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div data-theme="andtheme" className="px-20">
            <Navbar />
            <LandingPage />
            <Footer />
          </div>
        }
      />
      <Route path="/kataKopi" element={<KataKopiPage />} />
    </Routes>
  );
}

export default App;
