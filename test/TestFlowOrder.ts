import {FourRES, FIVE_ELEMENT, CoinSymbol, FaceSymbol, CoinSet} from '../lib/index';
import { EARTH_SYMBOL } from '../lib';

test('testFlow', ()=> {
  let coSet1 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let coSet2 = new CoinSet([FaceSymbol.FaceDown, FaceSymbol.FaceDown, FaceSymbol.FaceUp]);
  let coSet3 = new CoinSet([FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp]);
  let movedSym = [coSet1.getMoveSymbol(), coSet2.getMoveSymbol(), coSet3.getMoveSymbol()];
  let realSym = [coSet1.getRealSymbol(), coSet2.getRealSymbol(), coSet3.getRealSymbol()];
  console.log('realSym', realSym);
  let fourRSObj = new FourRES(realSym);
  console.log('moveSym', movedSym);
  let fourRSOb = new FourRES(movedSym);
  console.log(fourRSObj.getEarthSymBolSet());
  console.log(FIVE_ELEMENT[fourRSObj.getMainElement()]);
  console.log(fourRSObj.getSymBolSetLabel());
  console.log(fourRSOb.getEarthSymBolSet());
  console.log(FIVE_ELEMENT[fourRSOb.getMainElement()]);
  console.log(fourRSOb.getSymBolSetLabel());
});