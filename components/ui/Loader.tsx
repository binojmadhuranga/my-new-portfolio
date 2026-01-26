'use client';

import React from 'react';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-20 w-20">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-200 dark:border-zinc-800"></div>
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600 dark:border-t-blue-500"></div>
        </div>
        
        {/* Loading Text */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-zinc-700 dark:text-zinc-300">
            Loading
          </span>
          <div className="flex gap-1">
            <span className="animate-bounce text-lg text-blue-600 dark:text-blue-500" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce text-lg text-blue-600 dark:text-blue-500" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce text-lg text-blue-600 dark:text-blue-500" style={{ animationDelay: '300ms' }}>.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
