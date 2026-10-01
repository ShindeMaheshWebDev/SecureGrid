import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ye line screen ko top par reset kar degi bina refresh ke
    window.scrollTo(0, 0);
  }, [pathname]); // Jab bhi path badlega (e.g. /home se /about), ye chalega

  return null;
};

export default ScrollToTop;