import { motion } from "framer-motion";
import React from "react";

// Define the type for the Higher Order Component (HOC) wrapper
interface TransitionProps {
  children?: React.ReactNode;
}

const transition = (OgComponent: React.ComponentType<TransitionProps>) => {
  const AnimatedComponent: React.FC<TransitionProps> = ({ children }) => (
    <OgComponent>
      <motion.div
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {children}
    </OgComponent>
  );

  return AnimatedComponent;
};

export default transition;
