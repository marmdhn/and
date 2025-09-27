import LandingPage from "../pages/landingPage";
import ServiceDetailPage from "../pages/serviceDetailPage";
import KataKopiPage from "../pages/example/kataKopi";
import { ReactNode } from "react";
import AboutUsPage from "../pages/aboutUsPage";

export interface RouteConfig {
  path: string;
  element: ReactNode;
  useDefaultLayout?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: <LandingPage />,
    useDefaultLayout: true,
  },
  {
    path: "/services",
    element: <ServiceDetailPage />,
    useDefaultLayout: true,
  },
  {
    path: "/about",
    element: <AboutUsPage />,
    useDefaultLayout: true,
  },
  {
    path: "/kataKopi",
    element: <KataKopiPage />,
    useDefaultLayout: false,
  },
];
