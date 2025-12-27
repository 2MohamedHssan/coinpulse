import CoinOverView from "@/components/home/CoinOverView";
import CoinOverViewFallback from "@/components/ui/CoinOverView.fallback";
import TrendingCoins from "@/components/home/TrendingCoins";
import TrendingCoinsFallback from "@/components/ui/TrendingCoins.fallback";
import { Suspense } from "react";
import Categories from "@/components/Categories";

import CategoriesFallback from "@/components/ui/Categories.fallback";

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
        <Suspense fallback={<CategoriesFallback />}>
          <Categories />
        </Suspense>
      </section>
    </main>
  );
}
