import { useGalleryContext } from "../../components/gallery-context-provider/index";
import { useCycleIndex } from "../../hooks/use-cycle-index";

export function Gallery() {
  const images = useGalleryContext();
  const indexController = useCycleIndex(images.length);
  const currentImage = images[indexController.index];
  return (
    <div onClick={() => indexController.next()}>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <img src={currentImage.images.original.url} />
    </div>
  );
}
