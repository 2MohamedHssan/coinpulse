import { fetcher } from '@/lib/coingecko.actions'
import { formateCurrency } from '@/lib/utils'
import Image from 'next/image'

async function CoinOverView() {
    const coin = await fetcher<CoinDetailsData>('/coins/bitcoin',{
      dex_pair_format:'symbol'
    })
  return (
    <div className="" id="coin-overview">
      <div className="header pt-2">
        <Image width={65} height={65} src={coin.image.large} alt={coin.name} />
        <div className="info">
          <p>{coin.name} / {coin.symbol.toUpperCase()} </p>
          <h1>{formateCurrency(coin.market_data.current_price.usd)}</h1>
        </div>
      </div>
    </div>
  )
}

export default CoinOverView