import { Item } from '@/gilded-rose';
import { BaseStrategy } from './base-strategy';
export class DefaultStrategy extends BaseStrategy {
  computeQuality(i: Item): number {
    const degradationSpeed = i.sellIn <= 0 ? 2 : 1;

    return i.quality - degradationSpeed;
  }
}
export class ConjuredStrategy extends BaseStrategy {
  computeQuality(i: Item): number {
    const degradationSpeed = i.sellIn <= 0 ? 4 : 2
    
    return i.quality - degradationSpeed;
  }
}