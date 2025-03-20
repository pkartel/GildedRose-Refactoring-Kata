import { GoodsTypes } from './types';
import { AgedBrieStrategy, BackstagePassStrategy, SulfurasStrategy } from './goods-degradation-strategies/appreciation-strategies';
import { ConjuredStrategy, DefaultStrategy } from './goods-degradation-strategies/degradation-strategies';
import { BaseStrategy } from './goods-degradation-strategies/base-strategy';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  private static strategies: Record<GoodsTypes, BaseStrategy> = {
    [GoodsTypes.sulfuras]: new SulfurasStrategy(),
    [GoodsTypes.agedBrie]: new AgedBrieStrategy(),
    [GoodsTypes.backstagePass]: new BackstagePassStrategy(),
    [GoodsTypes.conjured]: new ConjuredStrategy(),
    [GoodsTypes.default]: new DefaultStrategy()
  }

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality = () => 
    this.items.forEach(i => {
      const strategy = GildedRose.strategies[i.name] || GildedRose.strategies[GoodsTypes.default];
      strategy.updateItem(i);
  })
}
