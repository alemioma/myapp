'use client';
import { useState } from "react";
import { XMarkIcon } from '@heroicons/react/20/solid';
import styles from './custom/banner.module.css';

export default function Banner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 dark:bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          className={`${styles.polygonClip} aspect-577/310 w-144.25 bg-gradient-to-r from-[#ff1493] to-[#6a0dad] opacity-100 dark:from-[#ff4da6] dark:to-[#9b59b6]`}
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          className={`${styles.polygonClip} aspect-577/310 w-144.25 bg-gradient-to-r from-[#ff1493] to-[#6a0dad] opacity-100 dark:from-[#ff4da6] dark:to-[#9b59b6]`}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm/6 text-gray-900 dark:text-gray-100">
          <strong className="font-semibold">Painless approach to development on 2025</strong>
          <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Join us from June 7 – 9 to see what’s coming next.
        </p>
        <a
          href="#"
          className="flex-none rounded-full bg-gray-900 dark:bg-gray-700 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 dark:hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Get your license now <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="absolute right-4 top-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
          onClick={() => setVisible(false)}
          aria-label="Cerrar banner"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}