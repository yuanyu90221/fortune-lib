import FourRES from './fourResponse';
import {CoinSymbol} from './coinSet';
export default class upBaseSet extends FourRES{

  constructor(symbolSet: CoinSymbol[]) {
    super(symbolSet);
    let first = this.getEarthSYM()[0];
    
  }
}