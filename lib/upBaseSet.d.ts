import { EARTH_SYMBOL } from './enum_data';
import CoinSet from './coinSet';
import BaseSet from './baseSet';
export default class upBaseSet extends BaseSet {
    constructor(orgSet: CoinSet[]);
    getMovedSymbolabel(): string[];
    getNext3EarthSYMs(first: EARTH_SYMBOL): EARTH_SYMBOL[];
}
