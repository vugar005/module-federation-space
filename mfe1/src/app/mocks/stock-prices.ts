import { IStockPrice } from '../core/models/stock-price.model';

export const randomStockPriceGenerator = (
  symbol: string,
  initPrice: number
): IStockPrice => {
  const change = (Math.floor(Math.random() * 110) - 10) * 0.1;
  const randomVolume = Math.floor(Math.random() * 1000000);

  return {
    symbol: symbol,
    price: initPrice + change,
    change: change,
    changePercent: (initPrice - change) / initPrice,
    volume: randomVolume,
    date: new Date().toString(),
  };
};
