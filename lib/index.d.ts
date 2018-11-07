import { EARTH_SYMBOL, SIX_RELATIVE_SYMBOL } from './enum_data';
import { SYMBOL_CHAIN, transversal, antiVersal } from './symbolStruct';
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
export { getNextOrder, getNextReverseOrder, EARTH_SYMBOL, SIX_RELATIVE_SYMBOL, SYMBOL_CHAIN, transversal, antiVersal };
