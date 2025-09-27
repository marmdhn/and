import { useLocation, useNavigate } from "react-router-dom";

export const useScrollHelper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string, targetRoute: string = "/") => {
    if (location.pathname !== targetRoute) {
      navigate(targetRoute);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return { scrollToSection };
};
