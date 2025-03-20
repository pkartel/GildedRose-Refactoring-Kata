import { GoodsTypes } from '@/types';
import { AgedBrieStrategy, BackstagePassStrategy, SulfurasStrategy } from './appreciation-strategies';
import { ConjuredStrategy, DefaultStrategy } from './degradation-strategies';

export default {
    [GoodsTypes.sulfuras]: new SulfurasStrategy(),
    [GoodsTypes.agedBrie]: new AgedBrieStrategy(),
    [GoodsTypes.backstagePass]: new BackstagePassStrategy(),
    [GoodsTypes.conjured]: new ConjuredStrategy(),
    [GoodsTypes.default]: new DefaultStrategy()
}