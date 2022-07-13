import { useState } from "react";
import clsx from "clsx";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  smallImageSrc: string;
};

export function Image(props: ImageProps) {
  const { smallImageSrc, className, ...rest } = props;
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const onLoad = () => setIsLoaded(true);

  return (
    <div className="relative overflow-hidden bg-gray-100">
      {/* eslint-disable-next-line */}
      <img
        className={clsx(isLoaded ? "opacity-100" : "opacity-0", className)}
        onLoad={onLoad}
        {...rest}
      />
      {/* eslint-disable-next-line */}
      <img
        draggable={false}
        className={clsx(
          "absolute inset-0 z-10 w-full max-w-none scale-125 blur-xl transition-all duration-1000",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
        src={props.smallImageSrc}
      />
    </div>
  );
}
