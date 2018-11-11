import {SYMBOL_CHAIN, transversal, antiVersal} from './index';
// import * as SIX_RELATIVE from './sixRelative';
// import {SIX_REL} from './sixRelative';
import {SIX_REL, SIX_RELATIVE} from './index';
transversal(SYMBOL_CHAIN[0], 2);

console.log(`========`);
antiVersal(SYMBOL_CHAIN[0], 2);

console.log(`六親`);

SIX_RELATIVE.antiVersal(SIX_REL[0], 2);
SIX_RELATIVE.transversal(SIX_REL[0], 5);