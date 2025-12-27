export const coinOHCLData: OHLCData[] = [
  [1766773800000, 87246, 87252, 87209, 87252],
  [1766775600000, 87157, 87232, 87111, 87232],
  [1766777400000, 87197, 87314, 87197, 87293],
  [1766779200000, 87301, 87473, 87301, 87404],
  [1766781000000, 87455, 87545, 87359, 87545],
  [1766782800000, 87526, 87631, 87526, 87609],
  [1766784600000, 87541, 87577, 87516, 87521],
  [1766786400000, 87448, 87468, 87431, 87447],
  [1766788200000, 87423, 87501, 87390, 87390],
  [1766790000000, 87374, 87408, 87316, 87381],
  [1766791800000, 87457, 87457, 87419, 87419],
  [1766793600000, 87393, 87393, 87289, 87306],
  [1766795400000, 87303, 87307, 87228, 87228],
  [1766797200000, 87251, 87332, 87251, 87332],
  [1766799000000, 87332, 87332, 87307, 87319],
  [1766800800000, 87334, 87391, 87334, 87369],
  [1766802600000, 87411, 87411, 87369, 87376],
  [1766804400000, 87384, 87402, 87367, 87396],
  [1766806200000, 87386, 87407, 87337, 87351],
  [1766808000000, 87364, 87452, 87364, 87452],
  [1766809800000, 87449, 87449, 87418, 87418],
  [1766811600000, 87401, 87428, 87401, 87413],
  [1766813400000, 87418, 87423, 87394, 87394],
  [1766815200000, 87396, 87452, 87396, 87452],
  [1766817000000, 87450, 87492, 87407, 87422],
  [1766818800000, 87416, 87416, 87384, 87397],
  [1766820600000, 87412, 87620, 87412, 87620],
  [1766822400000, 87520, 87520, 87485, 87493],
  [1766824200000, 87501, 87567, 87501, 87567],
  [1766826000000, 87550, 87553, 87531, 87531],
  [1766827800000, 87527, 87605, 87527, 87547],
  [1766829600000, 87526, 87575, 87526, 87561],
  [1766831400000, 87569, 87569, 87512, 87543],
  [1766833200000, 87500, 87500, 87383, 87436],
  [1766835000000, 87450, 87482, 87448, 87465],
  [1766836800000, 87456, 87456, 87438, 87454],
  [1766838600000, 87442, 87453, 87412, 87417],
  [1766840400000, 87443, 87459, 87429, 87429],
  [1766842200000, 87432, 87432, 87369, 87369],
  [1766844000000, 87363, 87427, 87363, 87425],
  [1766845800000, 87414, 87414, 87372, 87372],
  [1766847600000, 87378, 87485, 87378, 87482],
  [1766849400000, 87492, 87497, 87472, 87485],
  [1766851200000, 87501, 87541, 87501, 87522],
  [1766853000000, 87523, 87523, 87441, 87441],
  [1766854800000, 87466, 87499, 87458, 87458],
  [1766856600000, 87458, 87488, 87441, 87488],
  [1766858400000, 87487, 87518, 87472, 87518]
]

import {
  CandlestickSeriesPartialOptions,
  ChartOptions,
  ColorType,
  DeepPartial,
} from 'lightweight-charts';

export const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Search',
    href: '/',
  },
  {
    label: 'All Coins',
    href: '/coins',
  },
];

const CHART_COLORS = {
  background: '#0b1116',
  text: '#8f9fb1',
  grid: '#1a2332',
  border: '#1a2332',
  crosshairVertical: '#ffffff40',
  crosshairHorizontal: '#ffffff20',
  candleUp: '#158A6E',
  candleDown: '#EB1C36',
} as const;

export const getCandlestickConfig = (): CandlestickSeriesPartialOptions => ({
  upColor: CHART_COLORS.candleUp,
  downColor: CHART_COLORS.candleDown,
  wickUpColor: CHART_COLORS.candleUp,
  wickDownColor: CHART_COLORS.candleDown,
  borderVisible: true,
  wickVisible: true,
});

export const getChartConfig = (
  height: number,
  timeVisible: boolean = true,
): DeepPartial<ChartOptions> => ({
  width: 0,
  height,
  layout: {
    background: { type: ColorType.Solid, color: CHART_COLORS.background },
    textColor: CHART_COLORS.text,
    fontSize: 12,
    fontFamily: 'Inter, Roboto, "Helvetica Neue", Arial',
  },
  grid: {
    vertLines: { visible: false },
    horzLines: {
      visible: true,
      color: CHART_COLORS.grid,
      style: 2,
    },
  },
  rightPriceScale: {
    borderColor: CHART_COLORS.border,
  },
  timeScale: {
    borderColor: CHART_COLORS.border,
    timeVisible,
    secondsVisible: false,
  },
  handleScroll: true,
  handleScale: true,
  crosshair: {
    mode: 1,
    vertLine: {
      visible: true,
      color: CHART_COLORS.crosshairVertical,
      width: 1,
      style: 0,
    },
    horzLine: {
      visible: true,
      color: CHART_COLORS.crosshairHorizontal,
      width: 1,
      style: 0,
    },
  },
  localization: {
    priceFormatter: (price: number) =>
      '$' + price.toLocaleString(undefined, { maximumFractionDigits: 2 }),
  },
});

export const PERIOD_CONFIG: Record<
  Period,
  { days: number | string; interval?: 'hourly' | 'daily' }
> = {
  daily: { days: 1, interval: 'hourly' },
  weekly: { days: 7, interval: 'hourly' },
  monthly: { days: 30, interval: 'hourly' },
  '3months': { days: 90, interval: 'daily' },
  '6months': { days: 180, interval: 'daily' },
  yearly: { days: 365 },
  max: { days: 'max' },
};

export const PERIOD_BUTTONS: { value: Period; label: string }[] = [
  { value: 'daily', label: '1D' },
  { value: 'weekly', label: '1W' },
  { value: 'monthly', label: '1M' },
  { value: '3months', label: '3M' },
  { value: '6months', label: '6M' },
  { value: 'yearly', label: '1Y' },
  { value: 'max', label: 'Max' },
];

export const LIVE_INTERVAL_BUTTONS: { value: '1s' | '1m'; label: string }[] = [
  { value: '1s', label: '1s' },
  { value: '1m', label: '1m' },
];