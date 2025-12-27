import { fetcher } from '@/lib/coingecko.actions';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DataTable from '../DataTable';

async function TrendingCoins() {
    const columns:DataTableColumn<TrendingCoin>[]=[
    {
      header:'Name',
      cellClassName:'name-cell',
      cell:(coin)=>{
        const item = coin.item
        return(
          <Link href={`/coin/${item.id}`}>
            <Image src={item.large} width={36} height={36} alt={item.name} />
            <p>{item.name}</p>
          </Link>
        )
      }
    },
    {
      header:'24h Change',
      cellClassName:'name-cell',
      cell:(coin)=>{
        const item = coin.item
        const change = item.data?.price_change_percentage_24h?.usd ?? 0;
        const isTrendingUp = change > 0;
        return(
          <div className={cn('price-change flex flex-col items-start',isTrendingUp? 'text-green-500':'text-red-500')}>
            {isTrendingUp ?
            <TrendingUp height={16} width={16}/>:
            <TrendingDown height={16} width={16}/>
          }
            <span>{change.toFixed(2)}%</span>
          </div>
        )
      }
    },
    {header:'Price',cellClassName:'price-cell' ,cell:(coin)=>formatCurrency(coin.item.data?.price)},
  ]
    const trendingCoins = await fetcher<{coins:TrendingCoin[]}>('/search/trending',{},300);
  
  return (
    <div id='trending-coins'>
      <h4>Trending Coins</h4>
      <DataTable data={trendingCoins.coins?.slice(0,6) ||[]} 
        rowKey={(coin) => coin.item.id}
       columns={columns} headerCellClassName='py-3!'
       bodyCellClassName='py-2!'
       tableClassName='trending-coins-table'
       />
    </div>
  )
}

export default TrendingCoins