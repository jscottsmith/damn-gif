import clsx from "clsx";
import { PropsWithChildren } from "react";

export function IconBadge(
  props: PropsWithChildren<{
    isActive: boolean;
    activeBgColor?: string;
    activeIconColor?: string;
  }>
) {
  const { activeBgColor = "bg-gray-500", activeIconColor = "text-white" } =
    props;

  return (
    <span
      className={clsx("inline-block rounded-full p-2 md:p-3", {
        [activeBgColor]: props.isActive,
        [activeIconColor]: props.isActive,
      })}
    >
      {props.children}
    </span>
  );
}
