import {UpBaseSet, FaceSymbol, CoinSet, FIVE_ELEMENT, CoinSymbol} from '../lib/index';

test('UpBaseSetTest', ()=>{
  let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceDown]);
  let coSet2 = new CoinSet([FaceSymbol.FaceDown, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let coSet3 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceDown]);
  let orgSet = [coSet1, coSet2, coSet3];
  let upBsSet = new UpBaseSet(orgSet);
  console.log(upBsSet.getBasicSet().getEarthSymBolSet());
  console.log(upBsSet.getBasicSet().getSymBolSetLabel());
  console.log(upBsSet.getBasicSet().getFiveElesSYM());
  // console.log();
});