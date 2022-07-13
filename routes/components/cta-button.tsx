import { ArrowRightIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import { motion } from "framer-motion";

const variants = {
  rest: { scale: 1, background: "#374151" },
  tap: { scale: 0.95, background: "#A855F7" },
  hover: { scale: 1.05, background: "#8B5CF6" },
};

export function CtaButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button {...props}>
      <motion.span
        whileHover="hover"
        whileTap="tap"
        initial="rest"
        className={clsx(
          "relative inline-block rounded-full py-2 px-6 text-white md:py-3"
        )}
      >
        <motion.span
          variants={variants}
          className={clsx("absolute inset-0 block rounded-full ")}
        />
        <span className="relative z-10 flex gap-2">
          {props.children}
          <ArrowRightIcon className="w-6" />
        </span>
      </motion.span>
    </button>
  );
}
