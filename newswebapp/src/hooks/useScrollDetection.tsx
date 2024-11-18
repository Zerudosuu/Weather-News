import { useState, useEffect } from "react";

// Custom hook to detect scroll position and determine if a threshold is passed
const useScrollDetection = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsScrolled(true);
        console.log("scrolled past 100");
      } else {
        setIsScrolled(false);
        console.log("not scrolled past 100");
      }
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]); // Re-run effect only if threshold changes

  return isScrolled;
};

export default useScrollDetection;
