import { GalleryContextProvider } from "../routes/gallery/components/gallery-context-provider";
import { fetchGiphyImages } from "../helpers/fetch-giphy-images";
import { GalleryRoute } from "../routes/gallery";
import { GiphyByIdsResponse, ImageCollection } from "../types";

export async function getServerSideProps() {
  try {
    const response: GiphyByIdsResponse = await fetchGiphyImages();
    const images = response.data;
    return {
      props: { images },
    };
  } catch (error) {
    return {
      props: { images: null, error },
    };
  }
}

export default function GalleryPage(props: {
  images: ImageCollection;
  error?: ErrorEvent;
}) {
  if (props.error) {
    return <div>Error: {props.error.message}</div>;
  }

  return (
    <GalleryContextProvider images={props.images}>
      <GalleryRoute />
    </GalleryContextProvider>
  );
}
