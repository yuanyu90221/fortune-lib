import {OrderSetUtil, EARTH_SYMBOL_ORDER, EARTH_SYMBOL_REVERSE} from '../lib/index';

test('OrderSetTest', () => {
  let result: EARTH_SYMBOL_REVERSE = OrderSetUtil.getNextReverseOrder(EARTH_SYMBOL_REVERSE.丑);
  expect(EARTH_SYMBOL_REVERSE[result]).toEqual(EARTH_SYMBOL_REVERSE[EARTH_SYMBOL_REVERSE.卯]);
  console.log(EARTH_SYMBOL_REVERSE[result]);
  let resultNext: EARTH_SYMBOL_ORDER = OrderSetUtil.getNextOrder(EARTH_SYMBOL_ORDER.午);
  expect(EARTH_SYMBOL_ORDER[resultNext]).toEqual(EARTH_SYMBOL_ORDER[EARTH_SYMBOL_ORDER.申]);
  console.log(EARTH_SYMBOL_ORDER[resultNext]);
});