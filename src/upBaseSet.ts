import FourRES from './fourResponse';
import {CoinSymbol} from './coinSet';
import { EARTH_SYMBOL } from './enum_data';
import * as OrderSetUtil from './orderSet';
export default class upBaseSet extends FourRES{

  constructor(symbolSet: CoinSymbol[]) {
    super(symbolSet);
    let first = this.getEarthSYM()[0];
    let newEarthSYMs = this.getNext3EarthSYMs(first);
    this.setEarthSYM(newEarthSYMs);
    this.setFiveEles();
  }

  public getNext3EarthSYMs(first: EARTH_SYMBOL): EARTH_SYMBOL[] {
    let newEARTHSYMs: EARTH_SYMBOL[] = [];
    let pushedSYM: EARTH_SYMBOL = first;
    let index: number = 0;
    if (this.checkPos()) {
      for (; index < 3; index++) {
        pushedSYM = OrderSetUtil.transferNextOrder(pushedSYM);
        newEARTHSYMs.push(pushedSYM);
      }
    } else {
      for (; index < 3; index++) {
        pushedSYM = OrderSetUtil.transferReverseOrder(pushedSYM);
        newEARTHSYMs.push(pushedSYM);
      }
    }
    return newEARTHSYMs;
  }
  
}