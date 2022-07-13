import Link from "next/link";
import { CtaButton } from "./components/cta-button";
import { Intro } from "./components/intro";
import { motion } from "framer-motion";

export function HomeRoute() {
  return (
    <>
      <Intro />
      <article className="flex h-screen items-center justify-center bg-gray-100 p-2">
        <div className="text-gray-00 max-w-md rounded-2xl bg-white p-6 text-gray-600 md:p-12 md:text-lg">
          <h1 className="mb-6 text-center text-3xl font-light text-gray-800">
            Hi there!{" "}
            <motion.span
              className="inline-block"
              initial={{ rotate: 10 }}
              animate={{ rotate: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 0.5 }}
            >
              👋🏻
            </motion.span>
          </h1>
          <p className="mb-4">
            Here&apos;s a gallery of GIFs I created a long time ago that are
            hosted on{" "}
            <a
              className="text-violet-700 hover:text-violet-900"
              href="https://giphy.com/channel/damntv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Giphy.
            </a>
          </p>
          <p className="mb-4">For each image:</p>
          <p>
            If you love it —{" "}
            <strong className="font-bold">drag it to the right.</strong>
          </p>
          <p className="mb-4">
            If you think it&apos;s trash —{" "}
            <strong className="font-bold">drag it to the left.</strong>
          </p>

          <p>Ok, have fun!</p>
          <div className="flex justify-center">
            <Link href="/gallery">
              <a>
                <CtaButton className="mt-6">View Gallery</CtaButton>
              </a>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
