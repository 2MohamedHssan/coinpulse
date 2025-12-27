import React from "react";

export default function CategoriesFallback() {
  return (
    <div className="mt-10 p-6 bg-dark-600 rounded-2xl border border-white/5 animate-pulse">
      <div className="h-7 bg-gray-700/50 rounded-lg w-48 mb-6" />
      
      <div className="w-full">
        {/* Header Skeleton */}
        <div className="flex items-center py-4 border-b border-white/5 px-5">
          <div className="h-4 bg-gray-700/50 rounded w-24 mr-auto" />
          <div className="h-4 bg-gray-700/50 rounded w-24 mr-auto hidden sm:block" />
          <div className="h-4 bg-gray-700/50 rounded w-20 mr-auto" />
          <div className="h-4 bg-gray-700/50 rounded w-28 ml-auto hidden md:block" />
          <div className="h-4 bg-gray-700/50 rounded w-28 ml-auto hidden lg:block" />
        </div>

        {/* Rows Skeleton */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex items-center py-5 border-b border-white/5 last:border-0 px-5">
            {/* Category Name */}
            <div className="h-4 bg-gray-700/30 rounded w-32 mr-auto" />
            
            {/* Top Gainers Icons */}
            <div className="hidden sm:flex gap-2 mr-auto min-w-[120px]">
              <div className="h-7 w-7 rounded-full bg-gray-700/30 border-2 border-dark-600" />
              <div className="h-7 w-7 rounded-full bg-gray-700/30 border-2 border-dark-600" />
              <div className="h-7 w-7 rounded-full bg-gray-700/30 border-2 border-dark-600" />
            </div>

            {/* 24h Change */}
            <div className="h-4 bg-gray-700/30 rounded w-16 mr-auto" />

            {/* Market Cap */}
            <div className="h-4 bg-gray-700/30 rounded w-24 ml-auto hidden md:block" />

            {/* 24h Volume */}
            <div className="h-4 bg-gray-700/30 rounded w-24 ml-auto hidden lg:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
