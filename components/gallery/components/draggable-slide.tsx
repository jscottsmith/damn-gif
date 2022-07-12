import * as React from "react";
import { motion, useMotionValue, useSpring, useAnimation } from "framer-motion";

type Direction = "left" | "right";

export function DraggableSlide(
  props: React.PropsWithChildren<{
    onThrowLeftComplete?: () => unknown;
    onThrowRightComplete?: () => unknown;
  }>
) {
  const constraintsRef = React.useRef<HTMLDivElement>();
  const [constrained, setConstrained] = React.useState(true);
  const [direction, setDirection] = React.useState<Direction>();

  // NOTE: this is used once the drag completes and a throw is triggered
  // the controls are use to finish the animation off the screen
  const controls = useAnimation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSmooth = useSpring(x, { damping: 10, stiffness: 100 });

  const throwEnd = (min: number) => {
    const direction = xSmooth.get() < 0 ? "left" : "right";
    const velocity = xSmooth.getVelocity();

    setDirection(direction);

    // NOTE: gets the distance to throw if we meet the min threshold
    const throwDistance = () => {
      const containerWidth = window.innerWidth;
      const childWidth = constraintsRef.current
        ? constraintsRef.current.getBoundingClientRect().width
        : 0;

      return direction === "left"
        ? -containerWidth / 2 - childWidth
        : containerWidth / 2 + childWidth;
    };

    if (Math.abs(velocity) > min) {
      setConstrained(false);
      controls.start({
        x: throwDistance(),
        y: y.get(),
        transition: { type: "spring", stiffness: 100 },
        // transition: {
        //   type: "inertia",
        // },
      });
    }
  };

  const onAnimationComplete = () => {
    if (constrained) return;
    if (direction === "left") {
      props.onThrowLeftComplete && props.onThrowLeftComplete();
    }
    if (direction === "right") {
      props.onThrowRightComplete && props.onThrowRightComplete();
    }
  };

  return (
    <motion.div
      // @ts-expect-error
      ref={constraintsRef}
      className="cursor-grab"
      drag
      dragElastic={2}
      dragConstraints={constrained && { left: 0, right: 0, top: 0, bottom: 0 }}
      animate={controls}
      whileDrag={{
        backgroundColor: "#000",
      }}
      style={{ x, y }}
      onDragEnd={() => throwEnd(300)}
      onAnimationComplete={onAnimationComplete}
    >
      {props.children}
    </motion.div>
  );
}
