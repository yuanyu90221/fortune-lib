import {FourRES, FIVE_ELEMENT, CoinSymbol} from '../lib/index';
import { EARTH_SYMBOL } from '../lib';


test('fourResTest', () => {
  let result4RES = new FourRES([CoinSymbol["||"], CoinSymbol["|"], CoinSymbol["||"]]);
  console.log(result4RES.getEarthSymBolSet());
  expect(FIVE_ELEMENT[result4RES.getMainElement()]).toEqual(FIVE_ELEMENT[FIVE_ELEMENT.水]);
  console.log('本宮:' + FIVE_ELEMENT[result4RES.getMainElement()]);
  expect(result4RES.getEarthSymBolSet()[0] + result4RES.getEarthSymBolSet()[1] + result4RES.getEarthSymBolSet()[2]).toEqual(EARTH_SYMBOL[EARTH_SYMBOL.午] + EARTH_SYMBOL[EARTH_SYMBOL.辰] + EARTH_SYMBOL[EARTH_SYMBOL.寅] );
  console.log(result4RES.getSymBolSet());
  expect(result4RES.getSymBolSetLabel()[0] + '->' +result4RES.getSymBolSetLabel()[1] + '->' + result4RES.getSymBolSetLabel()[2]).toEqual(CoinSymbol[CoinSymbol["||"]]+'->'+CoinSymbol[CoinSymbol["|"]]+'->'+CoinSymbol[CoinSymbol["||"]]);
  console.log(result4RES.getSymBolSetLabel());
  expect(result4RES.checkPos()).toEqual(true);
  console.log(result4RES.checkPos()?'四陽':'四陰');

  let fourRes_1 = new FourRES([CoinSymbol["||"], CoinSymbol["||"], CoinSymbol["||"]]);
  console.log(fourRes_1.getEarthSymBolSet());
  expect(FIVE_ELEMENT[fourRes_1.getMainElement()]).toEqual(FIVE_ELEMENT[FIVE_ELEMENT.土]);
  console.log('本宮:' + FIVE_ELEMENT[fourRes_1.getMainElement()]);
  expect(fourRes_1.getEarthSymBolSet()[0] + fourRes_1.getEarthSymBolSet()[1] + fourRes_1.getEarthSymBolSet()[2]).toEqual(EARTH_SYMBOL[EARTH_SYMBOL.卯] + EARTH_SYMBOL[EARTH_SYMBOL.巳] + EARTH_SYMBOL[EARTH_SYMBOL.未] );
  console.log(fourRes_1.getSymBolSet());
  expect(fourRes_1.getSymBolSetLabel()[0] + '->' + fourRes_1.getSymBolSetLabel()[1] + '->' + fourRes_1.getSymBolSetLabel()[2]).toEqual(CoinSymbol[CoinSymbol["||"]]+'->'+CoinSymbol[CoinSymbol["||"]]+'->'+CoinSymbol[CoinSymbol["||"]]);
  console.log(fourRes_1.getSymBolSetLabel());
  expect(fourRes_1.checkPos()).toEqual(false);
  console.log(fourRes_1.checkPos()?'四陽':'四陰');
});