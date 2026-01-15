import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      // Smooth fade-in for the entire background
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center h-screen bg-base-200"
    >
      <div className="flex flex-col items-center">
        {/* Animated Spinner */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { repeat: Infinity, duration: 1, ease: "linear" },
            scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
        />

        {/* Animated Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg font-semibold text-gray-700 flex"
        >
          {"Loading...".split("").map((letter, index) => (
            <motion.span
              key={index}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
