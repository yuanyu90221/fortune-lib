import {SYMBOL_CHAIN, transversal, antiVersal, EARTH_SYMBOL} from '../lib/index';

test('SymbolChainTest', ()=> {
  let startSymBol = SYMBOL_CHAIN[0];
  console.log(startSymBol.getSymbol());
  expect(startSymBol.getSymbol()).toEqual(EARTH_SYMBOL[0]);
  console.log(`順推 2步`);
  let result = transversal(startSymBol, 2);
  console.log(`======`);
  console.log(`result: `, result.getSymbol());
  expect(result.getSymbol()).toEqual(EARTH_SYMBOL[2]);
  console.log(`逆推 2步`);
  let resultReverse = antiVersal(startSymBol, 2);
  console.log(`======`);
  console.log(`resultReverse: `, resultReverse.getSymbol());
  expect(resultReverse.getSymbol()).toEqual(EARTH_SYMBOL[10]);
});