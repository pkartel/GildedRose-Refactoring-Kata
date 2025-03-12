import { Item } from '@/gilded-rose';
import { IDegradationStrategy } from '@/types';

export class DegradationStrategy implements IDegradationStrategy<Item> {
  minQuality = 0;

  getQuality(i: Item, diff?: number) {
    const { sellIn, quality } = i;
    diff = typeof diff === 'number' ? diff : (sellIn <= 0 ? 2 : 1);

    return quality - diff >= this.minQuality ? quality - diff : this.minQuality;
  }
}

export class ConjuredStrategy extends DegradationStrategy {
  getQuality = (i: Item) => super.getQuality(i, i.sellIn <= 0 ? 4 : 2);
}