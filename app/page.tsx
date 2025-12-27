import CoinOverView from "@/components/home/CoinOverView";
import CoinOverViewFallback from "@/components/home/CoinOverView.fallback";
import TrendingCoins from "@/components/home/TrendingCoins";
import TrendingCoinsFallback from "@/components/home/TrendingCoins.fallback";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main className="main-container">
      <section className="home-grid">
        <Suspense fallback={<CoinOverViewFallback />}>
          <CoinOverView />
        </Suspense>
        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>
      </section>
      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>
    </main>
  );
}
