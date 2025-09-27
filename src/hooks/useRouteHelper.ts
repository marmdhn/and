import { useNavigate } from "react-router-dom";

export const useRouteHelper = () => {
  const navigate = useNavigate();

  const handleDirectRoute = (route: string) => {
    navigate(route);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return { handleDirectRoute };
};
