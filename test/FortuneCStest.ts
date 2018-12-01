import {CoinSet, CoinSymbol, FaceSymbol, FortuneCS} from '../lib/index';


test('testFourtuneCS', ()=> {
  let coSet6 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceDown]);
  let coSet5 = new CoinSet([FaceSymbol.FaceDown, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let coSet4 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceDown]);
  let upbsSet = [coSet6, coSet5, coSet4];
  let coSet3 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceDown]);
  let coSet2 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceDown]);
  let bsSet = [coSet3, coSet2, coSet1];
  let fortuneResult: FortuneCS = new FortuneCS([upbsSet, bsSet]);
  console.log(fortuneResult.getUpBsSet().getBasicSet().getEarthSymBolSet());
  console.log(fortuneResult.getbsSet().getBasicSet().getEarthSymBolSet());
});