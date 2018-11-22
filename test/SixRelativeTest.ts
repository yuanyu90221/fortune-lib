import {SIX_REL, SIX_RELATIVE} from '../lib/index';

test('SixRelTest', ()=>{
  console.log(`六親`);
  console.log('推 剋');
  let resultReverse = SIX_RELATIVE.antiVersal(SIX_REL[0], 1);
  expect(resultReverse.getSymbol()).toEqual(SIX_REL[2].getSymbol());
  console.log(SIX_REL[0].getSymbol() ,'剋' ,resultReverse.getSymbol());
  console.log('推 生');
  let resultGen = SIX_RELATIVE.transversal(SIX_REL[0], 1);
  expect(resultGen.getSymbol()).toEqual(SIX_REL[1].getSymbol());
  console.log(SIX_REL[0].getSymbol(), '生', resultGen.getSymbol());
});