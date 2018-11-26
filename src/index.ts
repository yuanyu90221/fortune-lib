import {EARTH_SYMBOL, SIX_RELATIVE_SYMBOL} from './enum_data';
import {SYMBOL_CHAIN, transversal, antiVersal} from './symbolStruct';
import {SIX_REL} from './sixRelative';
import * as SIX_RELATIVE from './sixRelative';
import {FIVE_EL} from './fiveElement';
import * as FIVE_ELM from './fiveElement';
import {CoinSymbol, FaceSymbol} from './coinSet';
import CoinSet from './coinSet';
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

export {getNextOrder, getNextReverseOrder, EARTH_SYMBOL, 
  SIX_RELATIVE_SYMBOL, SYMBOL_CHAIN, transversal, antiVersal,
  SIX_RELATIVE, SIX_REL, CoinSet, CoinSymbol, FaceSymbol, FIVE_ELM, FIVE_EL};