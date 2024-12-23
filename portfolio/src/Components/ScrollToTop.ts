import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const location = useLocation(); // React Router hook to detect route changes

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // Run effect whenever location changes (route change)

  return null; // This component renders nothing visually
};

export default ScrollToTop;
