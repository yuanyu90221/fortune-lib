import {BaseSet, FaceSymbol, CoinSet, FIVE_ELEMENT} from '../lib/index';

test('TestBaseFlow', ()=>{
  let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let coSet2 = new CoinSet([FaceSymbol.FaceDown, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let coSet3 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let orgSet = [coSet1, coSet2, coSet3];
  let bsSet = new BaseSet(orgSet);
  console.log(bsSet.getBasicSet().getEarthSymBolSet());
  console.log(bsSet.getBasicSet().getSymBolSetLabel());
  console.log(FIVE_ELEMENT[bsSet.getBasicSet().getMainElement()]);
  let movedSet = bsSet.getMovedSet();
  if (movedSet!=null) {
    console.log(movedSet.getEarthSymBolSet());
    console.log(movedSet.getSymBolSetLabel());
    console.log(FIVE_ELEMENT[movedSet.getMainElement()]);
  }
});