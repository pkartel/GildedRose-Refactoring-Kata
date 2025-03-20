import { Item } from "@/gilded-rose";
import { IUpdateQualityStrategy } from "@/types";

export abstract class BaseStrategy implements IUpdateQualityStrategy<Item> {
    protected minQuality = 0;
    protected maxQuality = 50;
  
    abstract calculateNewQuality(i: Item): number;
  
    getQuality(i: Item): number {
      const newQuality = this.calculateNewQuality(i);
      return Math.max(this.minQuality, Math.min(this.maxQuality, newQuality));
    }
  }