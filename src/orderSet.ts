import {EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE} from './enum_data';
const ENUM_LEN: number = 6;
/**
 * @description getNextOrder
 * 
 * @param {EARTH_SYMBOL_ORDER} symbol 
 */
const getNextOrder = (symbol: EARTH_SYMBOL_ORDER) : EARTH_SYMBOL_ORDER=> {
  return (++symbol)%ENUM_LEN;
};
/**
 * @description getNextReverseOrder
 * 
 * @param {EARTH_SYMBOL_REVERSE} symbol 
 */
const getNextReverseOrder = (symbol: EARTH_SYMBOL_REVERSE) : EARTH_SYMBOL_REVERSE => {
  return (--symbol+ENUM_LEN)%ENUM_LEN;
};

export {getNextOrder, getNextReverseOrder, EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE};