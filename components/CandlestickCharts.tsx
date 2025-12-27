"use client";
import { coinOHCLData, getCandlestickConfig, getChartConfig, PERIOD_BUTTONS, PERIOD_CONFIG } from "@/data";
import { fetcher } from "@/lib/coingecko.actions";
import { convertOHLCData } from "@/lib/utils";
import { createChart, IChartApi, ISeriesApi ,CandlestickSeries} from "lightweight-charts";
import { useEffect, useRef, useState, useTransition } from "react";

function CandlestickCharts({ children, coinId, height = 360, initialPeriod = "daily" }: CandlestickChartProps) {
  const [loading, setLoading] = useState(false);
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const [isPending, startTransition] = useTransition();
  const candleSeriesRef = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const [period, setPeriod] = useState<Period>(initialPeriod);
  const [ohlcData, setOhlcData] = useState<OHLCData[]>([]);

  const fetchOHLCData = async (selectedPeriod: Period) => {
    setLoading(true);
    try {
      const { days } = PERIOD_CONFIG[selectedPeriod];
      const newData = await fetcher<OHLCData[]>(`/coins/${coinId}/ohlc`, {
        vs_currency: 'usd',
        days,
      });
      setOhlcData(newData as OHLCData[] ?? coinOHCLData);
    } catch (error) {
      console.error('Error fetching OHLC data:', error);
      setOhlcData(coinOHCLData);
    } finally {
      setLoading(false);
    }
  };

  const handlePeriodChange = async (newperiod: Period) => {
    if (newperiod === period) return;
    startTransition(async () => {
      setPeriod(newperiod);
      await fetchOHLCData(newperiod);
    });
  };

  // Initial fetch
  useEffect(() => {
    fetchOHLCData(period);
  }, [coinId]);

  // Chart initialization and cleanup
  useEffect(() => {
    const container = chartContainerRef.current;
    if (!container) return;

    const showTime = ['daily', 'weekly', 'monthly'].includes(period);
    const chart = createChart(container, {
      ...getChartConfig(height, showTime),
      width: container.clientWidth,
    });

    const series = chart.addSeries(CandlestickSeries, getCandlestickConfig());
    chartRef.current = chart;
    candleSeriesRef.current = series;

    const handleResize = () => {
      chart.applyOptions({ width: container.clientWidth });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
      chartRef.current = null;
      candleSeriesRef.current = null;
    };
  }, [height]);

  // Data update
  useEffect(() => {
    if (candleSeriesRef.current && ohlcData.length > 0) {
      candleSeriesRef.current.setData(convertOHLCData(ohlcData));
      chartRef.current?.timeScale().fitContent();
    }
  }, [ohlcData]);

  return (
    <div id="candlestick-chart">
      <div className="chart-header">
        <div className="flex-1">
          {children}
        </div>
        <div className="button-group">
          <span className="text-sm mx-2 text-purple-100/50 font-medium">Period:</span>
          {PERIOD_BUTTONS.map(({ value, label }) => (
            <button
              key={label}
              className={period === value ? 'config-button-active' : 'config-button'}
              disabled={loading}
              onClick={() => handlePeriodChange(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div ref={chartContainerRef} className="chart" style={{ height }}>
      </div>
    </div>
  );
}

export default CandlestickCharts