import React from "react";

export default function TrendingCoinsFallback() {
  return (
    <div className="p-4 rounded-md bg-gray-800 animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-1/2 mb-4" />
      <ul className="space-y-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-700" />
            <div className="flex-1">
              <div className="h-4 bg-gray-700 rounded w-1/3 mb-2" />
              <div className="h-3 bg-gray-700 rounded w-1/4" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
