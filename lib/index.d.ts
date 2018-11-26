import { EARTH_SYMBOL, SIX_RELATIVE_SYMBOL } from './enum_data';
import { SYMBOL_CHAIN, transversal, antiVersal } from './symbolStruct';
import { SIX_REL } from './sixRelative';
import * as SIX_RELATIVE from './sixRelative';
import { FIVE_EL, FIVE_ELEMENT } from './fiveElement';
import * as FIVE_ELM from './fiveElement';
import { CoinSymbol, FaceSymbol } from './coinSet';
import CoinSet from './coinSet';
import FourRES from './fourResponse';
import BaseSet from './baseSet';
/**
 * @description getNextOrder
 *
 * @param {string} symbol
 */
declare const getNextOrder: (symbol: string) => string;
/**
 * @description getNextReverseOrder
 *
 * @param {string} symbol
 */
declare const getNextReverseOrder: (symbol: string) => string;
export { getNextOrder, getNextReverseOrder, EARTH_SYMBOL, SIX_RELATIVE_SYMBOL, SYMBOL_CHAIN, transversal, antiVersal, SIX_RELATIVE, SIX_REL, CoinSet, CoinSymbol, FaceSymbol, FIVE_ELM, FIVE_EL, FourRES, FIVE_ELEMENT, BaseSet };
