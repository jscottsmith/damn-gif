import { useGalleryContext } from "../components/gallery-context-provider/index";

export function HomeRoute() {
  const images = useGalleryContext();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {images.map((item) => (
        <img src={item.images.original.url} key={item.id} />
      ))}
    </>
  );
}
