import { Item } from '@/gilded-rose';
import { IAppreciationStrategy } from '@/types';

export class AppreciationStrategy implements IAppreciationStrategy<Item> {
  maxQuality = 50;

  getQuality(i: Item, diff?: number) {
    const { sellIn, quality } = i;
    diff = typeof diff === 'number' ? diff : sellIn > 0 ? 1 : 2;

    return quality + diff <= this.maxQuality ? quality + diff : this.maxQuality;
  }
}

export class BackstagePassStrategy extends AppreciationStrategy {
  getQuality(i: Item) {
    const { sellIn, quality } = i;
    const diff = sellIn <= 0 ? -quality :
      sellIn < 11
        ? (sellIn < 6 ? 3 : 2)
        : 1;
    
    return super.getQuality(i, diff);
  }
}

export class SulfurasStrategy extends AppreciationStrategy {
  getQuality = (i: Item) => i.quality;
}