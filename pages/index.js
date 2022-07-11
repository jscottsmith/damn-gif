import { GalleryContextProvider } from "../components/gallery-context-provider";
import { fetchGiphyImages } from "../helpers/fetch-giphy-images";
import { HomeRoute } from "../routes";

export async function getServerSideProps() {
  try {
    const response = await fetchGiphyImages();
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

export default function HomePage(props) {
  if (props.error) {
    return <div>Error: {props.error.message}</div>;
  }

  return (
    <GalleryContextProvider images={props.images}>
      <HomeRoute />
    </GalleryContextProvider>
  );
}
