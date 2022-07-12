import { useGalleryContext } from "../../components/gallery-context-provider/index";
import { useCycleIndex } from "../../hooks/use-cycle-index";
import { DraggableSlide } from "./components/draggable-slide";

export function Gallery() {
  const images = useGalleryContext();
  const indexController = useCycleIndex(images.length);
  const currentImage = images[indexController.index];
  return (
    <section className="select-none">
      <div className="flex h-screen items-center justify-center overflow-hidden p-2">
        <DraggableSlide
          key={currentImage.id}
          onThrowLeftComplete={() => indexController.next()}
          onThrowRightComplete={() => indexController.next()}
        >
          <img src={currentImage.images.original.url} draggable={false} />
        </DraggableSlide>
      </div>
      <nav className="fixed bottom-0 left-0 flex w-full">
        <button
          className="w-full bg-gray-100 p-2 hover:bg-slate-200"
          onClick={() => indexController.previous()}
        >
          prev
        </button>
        <button
          className="w-full bg-gray-100 p-2 hover:bg-slate-200"
          onClick={() => indexController.next()}
        >
          next
        </button>
      </nav>
    </section>
  );
}
