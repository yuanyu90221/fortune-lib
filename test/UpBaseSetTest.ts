import {UpBaseSet, FaceSymbol, CoinSet, FIVE_ELEMENT, CoinSymbol} from '../lib/index';

test('UpBaseSetTest', ()=>{
  let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let coSet2 = new CoinSet([FaceSymbol.FaceDown, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let coSet3 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let orgSet = [coSet1, coSet2, coSet3];
  let upBsSet = new UpBaseSet([CoinSymbol["||"], CoinSymbol["|"], CoinSymbol["||"]]);
  console.log(upBsSet.getEarthSymBolSet());
});