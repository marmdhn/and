import andLogo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <img src={andLogo} className="w-24" alt="Vite logo" />
      </div>
      <h1 className="font-bold">Comming Soon!</h1>
      <p className="read-the-docs">
        Dari pembuatan website, desain UI/UX, hingga editing foto & video. Semua
        solusi kreatif untuk bisnis dan personal brand Anda, ada di sini.
      </p>
    </>
  );
}

export default App;
