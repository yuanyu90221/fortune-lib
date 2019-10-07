import {CoinSet, CoinSymbol, FaceSymbol, FortuneCS, FIVE_ELEMENT, getFortuneResult} from '../lib/index';
import moment from 'moment';
test('testFortuneLib', ()=>{
  let coSet6 = new CoinSet([0, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let coSet5 = new CoinSet([0,0,1]);
  let coSet4 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let upbsSet = [coSet6, coSet5, coSet4];
  let coSet3 = new CoinSet([1, 1, 1]);
  let coSet2 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceDown]);
  let bsSet = [coSet3, coSet2, coSet1];
  let result: object = getFortuneResult([upbsSet, bsSet], moment().unix() * 1000);
  console.log(JSON.stringify(result));
});
