import { fetcher } from '@/lib/coingecko.actions'
import { formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import CoinOverViewFallback from '../ui/CoinOverView.fallback';
import CandlestickCharts from '../CandlestickCharts';

async function CoinOverView() {
    
  try {
    const [coin]= await Promise.all([
      await fetcher<CoinDetailsData>('/coins/bitcoin',{})
    ])
    
    return (
      <div className="" id="coin-overview">
        <CandlestickCharts coinId="bitcoin">
          <div className="header pt-2">
            <Image width={65} height={65} src={coin.image.large} alt={coin.name} />
            <div className="info">
              <p>{coin.name} / {coin.symbol.toUpperCase()} </p>
              <h1>{formatCurrency(coin.market_data.current_price.usd)}</h1>
            </div>
          </div>
      </CandlestickCharts>
      </div>
    )
  } catch (error) {
    console.log('Error fetching coin overview data:', error);
    return <CoinOverViewFallback />;
  }

}

export default CoinOverView