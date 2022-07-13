import { IconBadge } from "../icon-badge";
import {
  TrashIcon,
  HeartIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import clsx from "clsx";

export function FooterNav(props: { isLiked: boolean; isTrashed: boolean }) {
  return (
    <footer
      className={clsx(
        "pointer-events-none",
        "absolute bottom-0 left-0 right-0 z-50",
        "md:bottom-12"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex items-center justify-between",
          "bg-white bg-opacity-40 p-2 text-gray-900 backdrop-blur-lg",
          "md:max-w-lg md:rounded-full md:bg-gray-100 md:bg-opacity-40 md:p-4"
        )}
      >
        <IconBadge isActive={props.isTrashed} activeBgColor="bg-rose-500">
          <TrashIcon className="w-6" />
        </IconBadge>
        <div>
          <SwitchHorizontalIcon className="w-6 text-gray-400" />
        </div>
        <IconBadge isActive={props.isLiked} activeBgColor="bg-violet-500">
          <HeartIcon className="w-6" />
        </IconBadge>
      </div>
    </footer>
  );
}
