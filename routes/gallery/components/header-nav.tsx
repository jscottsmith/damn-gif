import { ArrowLeftIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import clsx from "clsx";
import Link from "next/link";
import { Dots } from "./dots";
import { IconButton } from "./icon-button";

export function HeaderNav(props: {
  title: string;
  current: number;
  length: number;
  externalLink: string;
}) {
  return (
    <header
      className={clsx(
        "absolute top-0 left-0 right-0 z-50",
        "md:top-12",
        "mx-auto flex items-center justify-between gap-4",
        "bg-white bg-opacity-40 p-2 text-gray-900 backdrop-blur-lg",
        "md:max-w-lg md:rounded-full md:bg-gray-100 md:bg-opacity-40 md:p-4"
      )}
    >
      <nav>
        <Link href="/">
          <a>
            <IconButton>
              <ArrowLeftIcon className="w-6" />
            </IconButton>
          </a>
        </Link>
      </nav>
      <div className="flex grow items-center justify-between">
        <div>
          <h2 className="text-xs font-bold uppercase">{props.title}</h2>
          <p className="text-xs font-medium tabular-nums">
            {props.current + 1}/{props.length + 1}
          </p>
        </div>
        <Dots current={props.current} length={props.length} />
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href={props.externalLink}>
          <IconButton>
            <ExternalLinkIcon className="w-6" />
          </IconButton>
        </a>
      </div>
    </header>
  );
}
