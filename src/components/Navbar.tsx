import andLogo from "/logo.svg";
import Button from "./Button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { scrollToSection } from "../helpers/scrollToSection";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasShadow, setHasShadow] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }

      if (currentScrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -130 : 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar pt-5 fixed top-0 left-0 w-full bg-base-100 z-50 ${hasShadow ? "shadow-md" : "shadow-none"} px-20`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => scrollToSection("about")}>About Us</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("service section")}>
                Services
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("portfolio section")}>
                Portfolio
              </button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
          </ul>
        </div>
        <button
          className="text-xl cursor-pointer"
          onClick={() => scrollToSection("hero section")}
        >
          <img src={andLogo} className="w-24" alt="logo" />
        </button>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-primary">
          <li>
            <button onClick={() => scrollToSection("about")}>About Us</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("service section")}>
              Services
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("portfolio section")}>
              Portfolio
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("service section")}>
              Pricing
            </button>
          </li>
        </ul>
        <Button text="Get Started" />
      </div>
    </motion.div>
  );
}
