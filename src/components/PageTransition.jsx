import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.1, // Pequeño delay para mejor UX
          duration: 0.35,
          ease: [0.33, 1, 0.68, 1], // Curva de easing suave
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.25,
          ease: [0.33, 1, 0.68, 1],
        },
      }}
    >
      {children}
    </motion.main>
  );
};

export default PageTransition;
