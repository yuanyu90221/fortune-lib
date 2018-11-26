import {FIVE_EL, FIVE_ELM} from '../lib/index';

test('five_elements_test', () => {
  console.log(`五行`);
  let resultReverse = FIVE_ELM.antiVersal(FIVE_EL[0], 1);
  expect(resultReverse.getSymbol()).toEqual(FIVE_EL[2].getSymbol());
  console.log(FIVE_EL[0].getSymbol()+ "剋" + resultReverse.getSymbol());
  let resultGen = FIVE_ELM.transversal(FIVE_EL[0], 1);
  expect(resultGen.getSymbol()).toEqual(FIVE_EL[1].getSymbol());
  console.log(FIVE_EL[0].getSymbol()+ "生" + resultGen.getSymbol());
});