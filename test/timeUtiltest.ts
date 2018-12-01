import {getDateToEHSymbol, EARTH_SYMBOL, HEAVEN_SYMBOL, getDateToEHSYM} from '../lib/index';
import moment from 'moment';
test('getDateToEHSymbol', ()=>{
  let timestamptoCalcuate = moment([2000,0,1]).unix()*1000;
  console.log(timestamptoCalcuate);
  
  let result = getDateToEHSymbol(timestamptoCalcuate);
  expect(result).toEqual(HEAVEN_SYMBOL[HEAVEN_SYMBOL.戊]+EARTH_SYMBOL[EARTH_SYMBOL.午]);
  console.log(result);
  
  timestamptoCalcuate = moment([2000,0,6]).unix()*1000;
  result = getDateToEHSymbol(timestamptoCalcuate);
  expect(result).toEqual(HEAVEN_SYMBOL[HEAVEN_SYMBOL.癸]+EARTH_SYMBOL[EARTH_SYMBOL.亥]);
  console.log(result);
  let resultObj = getDateToEHSYM(timestamptoCalcuate);
  console.log(resultObj);
});