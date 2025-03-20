import { Item } from "@/gilded-rose";
import { IQualityStrategy } from "@/types";

export abstract class BaseStrategy implements IQualityStrategy<Item> {
    protected minQuality = 0;
    protected maxQuality = 50;
  
    protected abstract computeQuality(i: Item): number;
    protected updateSellIn(i: Item) {
        i.sellIn -= 1;
    }

    updateItem(i) {
        const quality = this.computeQuality(i);
        i.quality = Math.max(this.minQuality, Math.min(this.maxQuality, quality));

        this.updateSellIn(i)
    }
  }