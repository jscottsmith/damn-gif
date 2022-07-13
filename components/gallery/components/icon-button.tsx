import clsx from "clsx";
import { motion } from "framer-motion";

export function IconButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className={clsx("relative inline-block rounded-full p-2 md:p-3")}
      {...props}
    >
      <motion.span
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1, opacity: 1 }}
        initial={{ scale: 0.9, opacity: 0 }}
        className={clsx("absolute inset-0 block rounded-full bg-gray-200")}
      />
      <span className="pointer-events-none relative z-10">
        {props.children}
      </span>
    </button>
  );
}
