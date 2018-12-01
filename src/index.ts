import {EARTH_SYMBOL, SIX_RELATIVE_SYMBOL} from './enum_data';
import {SYMBOL_CHAIN} from './symbolStruct';
import * as symUtil from './symbolStruct';
import {SIX_REL} from './sixRelative';
import * as SIX_RELATIVE from './sixRelative';
import {FIVE_EL, FIVE_ELEMENT} from './fiveElement';
import * as FIVE_ELM from './fiveElement';
import {CoinSymbol, FaceSymbol} from './coinSet';
import CoinSet from './coinSet';
import FourRES from './fourResponse';
import BaseSet from './baseSet';
import * as EARTH_FIVE_MAP from './earthFiveMap';
import {EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE} from './orderSet';
import * as OrderSetUtil from './orderSet';
import UpBaseSet from './upBaseSet';
import FortuneCS from './fortuneCS';
import FourtuneNumMap from './fortuneNumMap';
/**
 * @description getFortuneResult
 * 
 * @param {CoinSet[][]} inputSet 
 * @param {number} timestamp 
 */
const getFortuneResult = ( inputSet:CoinSet[][], timestamp: number): object => {
  let result:object = {};
  let finalResult: FortuneCS = new FortuneCS(inputSet);
  let upbase: object = {};
  let downbase: object = {};
  let upbsSet = finalResult.getUpBsSet();
  let bsSet = finalResult.getbsSet();
  upbase = setBasicBase(upbsSet);
  downbase = setBasicBase(bsSet);
  result = {
    "upbase": upbase,
    "downbase": downbase,
    "fortuneNum": finalResult.getFortuneNum(),
    "event": finalResult.getEventNum(),
    "corEvent": finalResult.getCorEventNum(),
    "mainElem": finalResult.getMainElement()
  }
  return result;
};

const setBasicBase = (baseSet: BaseSet): object => {
  let result: object = {};
  let movedSet = baseSet.getMovedSet();
  if (movedSet==null) {
    result = {
      "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
      "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
      "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
      "base": baseSet.getOrigSetSymbolLabel()
    }
  } else {
    result = {
      "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
      "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
      "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
      "base": baseSet.getOrigSetSymbolLabel(),
      "movebase": {
        "earthSym": movedSet.getEarthSymBolSet(),
        "fiveElem": movedSet.getFiveElesSYM(),
        "sixRes": movedSet.getSixResSymLabel(),
        "base": baseSet.getMovedSymbolabel(), 
      }
    }
  }
  return result;
};
export { EARTH_SYMBOL,
  OrderSetUtil, UpBaseSet,
  SIX_RELATIVE_SYMBOL, SYMBOL_CHAIN, symUtil,
  SIX_RELATIVE, SIX_REL, CoinSet, CoinSymbol, FaceSymbol, FIVE_ELM, FIVE_EL, FourRES, FIVE_ELEMENT, BaseSet, EARTH_FIVE_MAP,
  EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE,
  FortuneCS, FourtuneNumMap,
  getFortuneResult
};