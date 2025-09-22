import { motion } from "framer-motion";
import andLogo from "/logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex justify-center">
        <motion.img
          src={andLogo}
          className="w-24"
          alt="Vite logo"
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <motion.h1
        className="font-bold text-2xl text-center mt-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      >
        Coming Soon!
      </motion.h1>

      <motion.p
        className="read-the-docs text-center mt-10 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      >
        Dari pembuatan website, desain UI/UX, hingga editing foto & video. Semua
        solusi kreatif untuk bisnis dan personal brand Anda, ada di sini.
      </motion.p>
    </>
  );
}

export default App;
