import {OrderSetUtil, EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE, EARTH_SYMBOL} from '../lib/index';

test('OrderSetTest', () => {
  let result: EARTH_SYMBOL_REVERSE = OrderSetUtil.getNextReverseOrder(EARTH_SYMBOL_REVERSE.丑);
  expect(EARTH_SYMBOL_REVERSE[result]).toEqual(EARTH_SYMBOL_REVERSE[EARTH_SYMBOL_REVERSE.卯]);
  console.log(EARTH_SYMBOL_REVERSE[result]);
  let resultNext: EARTH_SYMBOL_ORDER = OrderSetUtil.getNextOrder(EARTH_SYMBOL_ORDER.午);
  expect(EARTH_SYMBOL_ORDER[resultNext]).toEqual(EARTH_SYMBOL_ORDER[EARTH_SYMBOL_ORDER.申]);
  console.log(EARTH_SYMBOL_ORDER[resultNext]);
  
  let resultTestNext: EARTH_SYMBOL = OrderSetUtil.transferReverseOrder(EARTH_SYMBOL.丑);
  expect(EARTH_SYMBOL[resultTestNext]).toEqual(EARTH_SYMBOL[EARTH_SYMBOL.卯]);
  console.log(EARTH_SYMBOL[resultTestNext]);

  let resultTest: EARTH_SYMBOL = OrderSetUtil.transferNextOrder(EARTH_SYMBOL.午);
  expect(EARTH_SYMBOL[resultTest]).toEqual(EARTH_SYMBOL[EARTH_SYMBOL.申]);
  console.log(EARTH_SYMBOL[resultTest]);
  
});