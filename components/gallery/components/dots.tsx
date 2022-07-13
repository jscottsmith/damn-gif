import clsx from "clsx";

export function Dots(props: { current: number; length: number }) {
  const dots = Array(props.length).fill(0);
  return (
    <div className="flex gap-1">
      {dots.map((_, index) => (
        <span
          key={index}
          className={clsx(
            "inline-block h-1 w-1 rounded-full",
            props.current === index ? "bg-gray-900" : "bg-gray-200"
          )}
        />
      ))}
    </div>
  );
}
