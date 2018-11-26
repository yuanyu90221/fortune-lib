import {EARTH_FIVE_MAP, FIVE_ELEMENT, EARTH_SYMBOL} from '../lib/index';

test('earthFiveMap', ()=>{
  let result: FIVE_ELEMENT  = EARTH_FIVE_MAP.getFiveFromMap(EARTH_SYMBOL.子);
  expect(FIVE_ELEMENT[result]).toEqual(FIVE_ELEMENT[FIVE_ELEMENT.水]);
  console.log(FIVE_ELEMENT[result]);
});