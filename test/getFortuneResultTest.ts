import {CoinSet, CoinSymbol, FaceSymbol, FortuneCS, FIVE_ELEMENT, getFortuneResult} from '../lib/index';
import moment from 'moment';
test('testFortuneLib', ()=>{
  let coSet6 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let coSet5 = new CoinSet([FaceSymbol.FaceDown, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let coSet4 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let upbsSet = [coSet6, coSet5, coSet4];
  let coSet3 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceDown]);
  let coSet2 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceDown]);
  let bsSet = [coSet3, coSet2, coSet1];
  let result: object = getFortuneResult([upbsSet, bsSet], moment().unix() * 1000);
  console.log(JSON.stringify(result));
});
