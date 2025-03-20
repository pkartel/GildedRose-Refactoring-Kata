import { GoodsTypes } from './types';
import degradationStrategies from './goods-degradation-strategies';

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

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality = () => 
    this.items.forEach(i => {
      const strategy = degradationStrategies[i.name] || degradationStrategies[GoodsTypes.default];
      strategy.updateItem(i);
  })
}
