import { Item } from '@/gilded-rose';
import { BaseStrategy } from './base-strategy';

export class AgedBrieStrategy extends BaseStrategy {
  calculateNewQuality(i: Item): number {
    const appreciationSpeed = i.sellIn <= 0 ? 2 : 1;

    return i.quality + appreciationSpeed
  }
}

export class BackstagePassStrategy extends BaseStrategy {
  calculateNewQuality(i: Item): number {
    const { sellIn, quality } = i;

    const appreciationSpeed = sellIn <= 0 ? -quality
      : sellIn < 6 ? 3
      : sellIn < 11 ? 2
      : 1
    
    return i.quality + appreciationSpeed
  }
}

export class SulfurasStrategy extends BaseStrategy {
  maxQuality = 80;
  minQuality = 80;

  calculateNewQuality(i: Item): number {
    return i.quality
  }
}