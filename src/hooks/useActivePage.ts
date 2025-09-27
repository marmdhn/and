import { useLocation } from "react-router-dom"; // atau useRouter kalau pakai Next.js
import { useState, useEffect } from "react";

export function useActivePage() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(location.pathname);

  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  return activePage;
}
