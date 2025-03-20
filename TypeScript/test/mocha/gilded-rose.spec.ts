import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';
import { GoodsTypes } from '@/types';

describe('Gilded Rose', () => {
  it(`should degrade quality of ${GoodsTypes.conjured} twice faster than by default`, () => {
    const sellIn = 3 
    const item = new Item(GoodsTypes.conjured, sellIn, 8)
    const gildedRose = new GildedRose([item]);

    for(let i = 0; i < sellIn; i++) {
      gildedRose.updateQuality();
    }
    
    expect(item.sellIn).equals(0);
  });
});
