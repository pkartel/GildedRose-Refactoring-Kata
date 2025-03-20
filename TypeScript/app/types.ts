export enum GoodsTypes {
    agedBrie = 'Aged Brie',
    backstagePass = 'Backstage passes to a TAFKAL80ETC concert',
    sulfuras = 'Sulfuras, Hand of Ragnaros',
    conjured = 'Conjured Mana Cake',
    default = 'Default',
}

export interface IQualityStrategy<T> {
    updateItem: (i: T) => void;
}
