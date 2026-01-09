"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-100 px-4 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      <div className="w-full max-w-2xl text-center">
        {/* 404 Number with gradient */}
        <div className="relative mb-8">
          <h1 className="text-[180px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-zinc-900 via-zinc-600 to-zinc-400 dark:from-zinc-100 dark:via-zinc-400 dark:to-zinc-600 sm:text-[240px]">
            404
          </h1>
          <div className="absolute inset-0 -z-10 blur-3xl opacity-20">
            <div className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Page Not Found
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-4 text-base font-medium text-white transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <svg
              className="h-5 w-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-zinc-300 px-8 py-4 text-base font-medium text-zinc-900 transition-all hover:border-zinc-400 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
          >
            Go Back
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="h-2 w-2 rounded-full bg-zinc-400 animate-pulse"></div>
          <div className="h-2 w-2 rounded-full bg-zinc-400 animate-pulse delay-75"></div>
          <div className="h-2 w-2 rounded-full bg-zinc-400 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
