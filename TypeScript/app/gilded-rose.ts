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
        default:
          if (this.items[i].name != GoodsTypes.backstagePass) {
            if (this.items[i].quality > 0) {
              this.items[i].quality = this.items[i].quality - 1 // default goods
            }
          } else { // agedBrie, backstage or sulfuras
            if (this.items[i].quality < 50) { // agedBrie, backstage
              this.items[i].quality = this.items[i].quality + 1
             
              if (this.items[i].name == GoodsTypes.backstagePass) {
                if (this.items[i].sellIn < 11) {
                  if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                  }
                }
                if (this.items[i].sellIn < 6) {
                  if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1
                  }
                }
              }
            }
          }

          this.items[i].sellIn = this.items[i].sellIn - 1;

          if (this.items[i].sellIn < 0) {
              if (this.items[i].name != GoodsTypes.backstagePass ) {
                if (this.items[i].quality > 0) {
                  this.items[i].quality = this.items[i].quality - 1 // Once the sell by date has passed, Quality degrades twice as fast
                }
              } else {
                this.items[i].quality = this.items[i].quality - this.items[i].quality
              }
          }
      }
    }

    return this.items;
  }
}
