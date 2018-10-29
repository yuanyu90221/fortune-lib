import {EARTH_SYMBOL} from './enum_data';
const earth_symbol_order = ["子", "寅", "辰", "午", "申", "戌"];
const earth_symbol_reverse = ["未", "巳", "卯", "丑", "亥", "酉"];

/**
 * @description getNextOrder
 * 
 * @param {string} symbol 
 */
const getNextOrder = (symbol: string) => {
  let idx = earth_symbol_order.indexOf(symbol);
  if (idx == -1) {
    throw `${symbol} not in earth symbol order`
  }
  let currentIdx = (idx+1) % earth_symbol_order.length;
  return earth_symbol_order[currentIdx];
};
/**
 * @description getNextReverseOrder
 * 
 * @param {string} symbol 
 */
const getNextReverseOrder = (symbol: string) => {
  let idx = earth_symbol_reverse.indexOf(symbol);
  if (idx == -1) {
    throw `${symbol} not in earth symbol reverse order`
  }
  let currentIdx = (idx+1) % earth_symbol_reverse.length;
  return earth_symbol_reverse[currentIdx];
};

export {getNextOrder, getNextReverseOrder};