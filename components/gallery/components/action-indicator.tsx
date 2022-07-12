import clsx from "clsx";
import { HeartIcon, TrashIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { Direction, Directions } from "./draggable-slide";

export function ActionIndicator(
  props: PropsWithChildren<{
    direction: Direction;
    onComplete: () => unknown;
  }>
) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center"
    >
      <motion.div
        onAnimationComplete={props.onComplete}
        initial={{ scale: 0 }}
        animate={{
          scale: 2.5,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 200,
        }}
        className={clsx(
          "absolute aspect-square w-full rounded-full",
          props.direction === Directions.LEFT ? "bg-rose-400" : "bg-violet-400"
        )}
      />
      <div className="relative z-10 text-white">
        {props.direction === Directions.LEFT ? (
          <div className="flex">
            <TrashIcon className="w-16 md:w-20" />
          </div>
        ) : (
          <div className="flex">
            <HeartIcon className="w-16 md:w-20" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
