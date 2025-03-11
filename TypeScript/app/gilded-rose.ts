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
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {      

      const name = this.items[i].name
      switch(name) {
        case GoodsTypes.sulfuras:
          break;
        case GoodsTypes.agedBrie:
          this.items[i].quality = degradationStrategies[name](this.items[i])
          this.items[i].sellIn = this.items[i].sellIn - 1
          break;
        case GoodsTypes.backstagePass:
          this.items[i].quality = degradationStrategies[name](this.items[i])
          this.items[i].sellIn = this.items[i].sellIn - 1
          break;
        default:
          if (this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1 // default goods
          }
          
          if (this.items[i].sellIn <= 0 && this.items[i].quality > 0) {
            this.items[i].quality = this.items[i].quality - 1 // Once the sell by date has passed, Quality degrades twice as fast
          }

          this.items[i].sellIn = this.items[i].sellIn - 1;
      }
    }

    return this.items;
  }
}
