import {SIX_REL, SIX_RELATIVE} from './index';

console.log(`六親`);
let result = SIX_RELATIVE.antiVersal(SIX_REL[0], 1);
console.log(SIX_REL[0].getSymbol()+ "剋" + result.getSymbol());
let result1 = SIX_RELATIVE.transversal(SIX_REL[0], 1);
console.log(SIX_REL[0].getSymbol()+ "生" + result1.getSymbol());
