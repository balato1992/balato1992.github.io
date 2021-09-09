export class InvestingDatum {
  tradeDate: Date = new Date(-8640000000000000);
  price: number = 0;
  shareCount: number = 0;

  cumulativeShareCount: number = 0;
  cumulativeDollarCost: number = 0;

  get dollarCost(): number {
    return this.price * this.shareCount;
  }
  get currentValue(): number {
    return this.price * this.cumulativeShareCount;
  }

  constructor(tradeDate: Date, price: number, shareCount: number, cumulativeShareCount: number, cumulativeDollarCost: number) {
    this.tradeDate = tradeDate;
    this.price = price;
    this.shareCount = shareCount;
    this.cumulativeShareCount = cumulativeShareCount;
    this.cumulativeDollarCost = cumulativeDollarCost;
  }
}