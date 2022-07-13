import { createContext, PropsWithChildren, useContext } from "react";
import { ImageCollection } from "../../../../types";

export const GalleryContext = createContext<ImageCollection>([]);

export function useGalleryContext() {
  return useContext(GalleryContext);
}

export function GalleryContextProvider(
  props: PropsWithChildren<{ images: ImageCollection }>
) {
  return (
    <GalleryContext.Provider value={props.images}>
      {props.children}
    </GalleryContext.Provider>
  );
}
