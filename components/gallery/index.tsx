import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGalleryContext } from "../../components/gallery-context-provider/index";
import { useCycleIndex } from "../../hooks/use-cycle-index";
import { Image } from "./components/image";
import { Directions, DraggableSlide } from "./components/draggable-slide";
import { FooterNav } from "./components/footer-nav";

export function Gallery() {
  const images = useGalleryContext();
  const [currentDirection, setDirection] = useState<Directions>();
  const indexController = useCycleIndex(images.length);
  const currentImage = images[indexController.index];

  const handleDecisionComplete = () => {
    indexController.next();
    setDirection(undefined);
  };

  return (
    <section className="select-none">
      <div className="relative flex h-screen items-center justify-center overflow-hidden p-2">
        <AnimatePresence>
          <motion.div
            key={currentImage.id}
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: {
                delay: 0.5,
                type: "spring",
                damping: 50,
                stiffness: 200,
              },
            }}
            exit={{ opacity: 0, scale: 1.25, position: "absolute" }}
          >
            <DraggableSlide
              onDragLeft={() => setDirection(Directions.LEFT)}
              onDragRight={() => setDirection(Directions.RIGHT)}
              onNoThrow={() => setDirection(undefined)}
              onThrowLeftComplete={handleDecisionComplete}
              onThrowRightComplete={handleDecisionComplete}
              minXDragDistance={150}
            >
              <Image
                src={currentImage.images.original.url}
                smallImageSrc={currentImage.images.fixed_width_small_still.url}
                draggable={false}
                alt={currentImage.title}
              />
            </DraggableSlide>
          </motion.div>
        </AnimatePresence>
      </div>
      <FooterNav
        isTrashed={currentDirection === Directions.LEFT}
        isLiked={currentDirection === Directions.RIGHT}
      />
    </section>
  );
}
