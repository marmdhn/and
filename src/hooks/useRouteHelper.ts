import { useNavigate } from "react-router-dom";

export const useRouteHelper = () => {
  const navigate = useNavigate();

  const handleDirectRoute = (route: string) => {
    navigate(route);
  };

  return { handleDirectRoute };
};
