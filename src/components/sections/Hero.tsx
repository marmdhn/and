import { motion } from "framer-motion";
import Button from "../Button";

export default function HeroSection() {
  return (
    <section
      id="Hero section"
      className="py-10 min-h-[calc(100vh+100px)] flex flex-col gap-16 justify-center items-center relative"
    >
      <motion.img
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        src="/ornaments/ornament-1.svg"
        alt="hero"
        className="ms-auto"
      />

      <div className="flex flex-col items-center justify-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className=" text-5xl font-bold text-primary"
        >
          Design. Develop. Create. And More.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-center w-3/4"
        >
          Dari pembuatan website, desain UI/UX, hingga editing foto & video.
          Semua solusi kreatif untuk bisnis dan personal brand Anda, ada di
          sini.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
        >
          <Button text="🚀  Mulai Sekarang" />
        </motion.div>
      </div>

      <motion.img
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
        src="/ornaments/ornament-2.svg"
        alt="hero"
        className="me-auto"
      />
    </section>
  );
}
