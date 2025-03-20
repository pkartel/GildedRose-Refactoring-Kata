export enum GoodsTypes {
    agedBrie = 'Aged Brie',
    backstagePass = 'Backstage passes to a TAFKAL80ETC concert',
    sulfuras = 'Sulfuras, Hand of Ragnaros',
    conjured = 'Conjured Mana Cake',
    default = 'Default',
}

export interface IUpdateQualityStrategy<T> {
    getQuality: (i: T) => number;
}
