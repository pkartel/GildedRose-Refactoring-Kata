export enum GoodsTypes {
    agedBrie = 'Aged Brie',
    backstagePass = 'Backstage passes to a TAFKAL80ETC concert',
    sulfuras = 'Sulfuras, Hand of Ragnaros',
    conjured = 'Conjured Mana Cake',
    default = 'Default',
}

export interface IDegradationStrategy<T> {
    getQuality: (i: T, diff?: number) => number;
    minQuality: number;
}
export interface IAppreciationStrategy<T> {
    getQuality: (i: T, diff?: number) => number;
    maxQuality: number;
}

