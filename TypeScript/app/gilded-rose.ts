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

  updateQuality = () => this.items.map(i => {
    switch(i.name) {
      case GoodsTypes.sulfuras:
        i.quality = degradationStrategies[i.name].getQuality(i);
        return i;
      case GoodsTypes.agedBrie:
      case GoodsTypes.backstagePass:
      case GoodsTypes.conjured:
        i.quality = degradationStrategies[i.name].getQuality(i);
        i.sellIn -= 1;
        return i;
      default:
        i.quality = degradationStrategies[GoodsTypes.default].getQuality(i);
        i.sellIn -= 1;
        return i;
    }
  })
}
