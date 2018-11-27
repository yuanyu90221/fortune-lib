import { EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE } from './enum_data';
/**
 * @description getNextOrder
 *
 * @param {EARTH_SYMBOL_ORDER} symbol
 */
declare const getNextOrder: (symbol: EARTH_SYMBOL_ORDER) => EARTH_SYMBOL_ORDER;
/**
 * @description getNextReverseOrder
 *
 * @param {EARTH_SYMBOL_REVERSE} symbol
 */
declare const getNextReverseOrder: (symbol: EARTH_SYMBOL_REVERSE) => EARTH_SYMBOL_REVERSE;
export { getNextOrder, getNextReverseOrder, EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE };
