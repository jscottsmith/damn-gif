import React, { useState } from "react";
import { motion } from "framer-motion";
import { LogoEye } from "./logo-eye";
import { LogoNike } from "./logo-nike";
import clsx from "clsx";

export function Intro() {
  const [showSecond, setShowSecond] = useState(false);
  const [completed, setOnComplete] = useState(false);
  return (
    <motion.div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center text-gray-900 transition-colors duration-500",
        {
          "bg-violet-300": !showSecond && !completed,
          "bg-fuchsia-300": showSecond && !completed,
          "bg-rose-300": showSecond && completed,
        }
      )}
      transition={{ type: "spring", stiffness: 300, damping: 80 }}
      animate={{ y: completed ? "110vh" : 0 }}
    >
      {!showSecond && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 1.5],
          }}
          onAnimationComplete={() => setShowSecond(true)}
        >
          <LogoEye />
        </motion.div>
      )}
      {showSecond && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 1.5],
          }}
          onAnimationComplete={() => setOnComplete(true)}
        >
          <LogoNike />
        </motion.div>
      )}
    </motion.div>
  );
}
