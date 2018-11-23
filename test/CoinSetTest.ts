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
  console.log(`input: `, DDUSet.getFaceSet(), `outputSymbol: `, CoinSymbol[DDUSet.getSymbol()], ` realSymbol: `, CoinSymbol[DDUSet.getRealSymbol()], ` moveSymbol: `, CoinSymbol[DDUSet.getMoveSymbol()]);
  console.log(`input: `, UDUSet.getFaceSet(), `outputSymbol: `, CoinSymbol[UDUSet.getSymbol()], ` realSymbol: `, CoinSymbol[UDUSet.getRealSymbol()], ` moveSymbol: `, CoinSymbol[UDUSet.getMoveSymbol()]);
  console.log(`input: `, DDDSet.getFaceSet(), `outputSymbol: `, CoinSymbol[DDDSet.getSymbol()], ` realSymbol: `, CoinSymbol[DDDSet.getRealSymbol()], ` moveSymbol: `, CoinSymbol[DDDSet.getMoveSymbol()]);
  console.log(`input: `, UUUSet.getFaceSet(), `outputSymbol: `, CoinSymbol[UUUSet.getSymbol()], ` realSymbol: `, CoinSymbol[UUUSet.getRealSymbol()], ` moveSymbol: `, CoinSymbol[UUUSet.getMoveSymbol()]);
  expect(CoinSymbol[DDUSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol["|"]]);
  expect(CoinSymbol[UDUSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol["||"]]);
  expect(CoinSymbol[UUUSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol.O]);
  expect(CoinSymbol[DDDSet.getSymbol()]).toEqual(CoinSymbol[CoinSymbol.X]);
});