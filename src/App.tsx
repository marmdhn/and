import "./App.css";
import Navbar from "./components/navbar";

function App() {
  return (
    <div
      data-theme="mytheme"
      className="min-h-screen flex flex-col items-center justify-center bg-white p-20"
    >
      <Navbar />
    </div>
  );
}

export default App;
