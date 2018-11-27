import FourRES from './fourResponse';
import { CoinSymbol } from './coinSet';
import { EARTH_SYMBOL } from './enum_data';
export default class upBaseSet extends FourRES {
    constructor(symbolSet: CoinSymbol[]);
    getNext3EarthSYMs(first: EARTH_SYMBOL): EARTH_SYMBOL[];
}
