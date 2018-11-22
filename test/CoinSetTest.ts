import {CoinSet, CoinSymbol, FaceSymbol} from '../lib/index';
test('CoinSetTest', ()=> {
  
  let DDU = [FaceSymbol.FaceDown, FaceSymbol.FaceDown, FaceSymbol.FaceUp];
  let DDUSet = new CoinSet(DDU);
  let UDU = [FaceSymbol.FaceUp, FaceSymbol.FaceDown, FaceSymbol.FaceUp];
  let UDUSet = new CoinSet(UDU);
  let UUU = [FaceSymbol.FaceUp, FaceSymbol.FaceUp, FaceSymbol.FaceUp];
  let UUUSet = new CoinSet(UUU);
  let DDD = [FaceSymbol.FaceDown, FaceSymbol.FaceDown, FaceSymbol.FaceDown];
  let DDDSet = new CoinSet(DDD);
  console.log(`input: `, DDUSet.getFaceSet(), `outputSymbol: `, CoinSymbol[DDUSet.getSymbol()]);
  console.log(`input: `, UDUSet.getFaceSet(), `outputSymbol: `, CoinSymbol[UDUSet.getSymbol()]);
  console.log(`input: `, DDDSet.getFaceSet(), `outputSymbol: `, CoinSymbol[DDDSet.getSymbol()]);
  console.log(`input: `, UUUSet.getFaceSet(), `outputSymbol: `, CoinSymbol[UUUSet.getSymbol()]);
  expect(CoinSymbol[DDUSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol["|"]]);
  expect(CoinSymbol[UDUSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol["||"]]);
  expect(CoinSymbol[UUUSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol.O]);
  expect(CoinSymbol[DDDSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol.X]);
});