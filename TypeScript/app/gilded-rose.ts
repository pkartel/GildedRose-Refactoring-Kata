import { GoodsTypes } from "./types";

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

const maxQuality = 50
const minQuality = 0

const degradationStrategies = {
  [GoodsTypes.agedBrie]: (i: Item) => i.quality < maxQuality ? i.quality + (i.sellIn > 0 ? 1 : 2) : i.quality,
  [GoodsTypes.backstagePass]: (i: Item) => {
    const { sellIn, quality } = i

    const dif = sellIn <= 0 ? -quality :
      sellIn < 11
        ? (sellIn < 6 ? 3 : 2)
        : 1
    
    return quality + dif <= maxQuality ? quality + dif : maxQuality
  },
  [GoodsTypes.conjured]: (i: Item) => {
    const { sellIn, quality } = i
    const diff = sellIn <= 0 ? 4 : 2

    return quality - diff >= minQuality ? quality - diff : minQuality
  },
  default: (i: Item) => {
    const { sellIn, quality } = i
    const diff = sellIn <= 0 ? 2 : 1

    return quality - diff >= minQuality ? quality - diff : minQuality
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
        return i
      case GoodsTypes.agedBrie:
      case GoodsTypes.backstagePass:
      case GoodsTypes.conjured:
        i.quality = degradationStrategies[i.name](i),
        i.sellIn -= 1
        return i
      default:
        i.quality =  degradationStrategies.default(i),
        i.sellIn -= 1
        return i
    }
  })
}
