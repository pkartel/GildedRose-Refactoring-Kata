import { GoodsTypes } from '@/types';
import { AppreciationStrategy, BackstagePassStrategy, SulfurasStrategy } from './appreciation-strategies';
import { ConjuredStrategy, DegradationStrategy } from './degradation-strategies';

export default {
    [GoodsTypes.sulfuras]: new SulfurasStrategy(),
    [GoodsTypes.agedBrie]: new AppreciationStrategy(),
    [GoodsTypes.backstagePass]: new BackstagePassStrategy(),
    [GoodsTypes.conjured]: new ConjuredStrategy(),
    [GoodsTypes.default]: new DegradationStrategy()
}