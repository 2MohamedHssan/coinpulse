import React from "react";

export default function CoinOverViewFallback() {
  return (
    <div className="p-4 rounded-md bg-gray-800 animate-pulse">
      <div className="h-6 bg-gray-700 rounded w-1/3 mb-4" />
      <div className="h-40 bg-gray-700 rounded mb-4" />
      <div className="flex gap-3">
        <div className="h-8 bg-gray-700 rounded w-1/4" />
        <div className="h-8 bg-gray-700 rounded w-1/4" />
        <div className="h-8 bg-gray-700 rounded w-1/4" />
      </div>
    </div>
  );
}
