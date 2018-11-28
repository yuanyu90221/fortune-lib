/**
 * 四應對照
 * 
 * 四陽
 * 
 * 申 1  午 2  辰 2  辰 1
 * 午 2  辰 1  寅 2  寅 1
 * 辰 2  寅 2  子 1  子 1
 *       
 * 土    水    木    金                 
 * 
 * 四陰
 * 
 * 丑 2  亥 1  酉 1  卯 2
 * 卯 1  丑 2  亥 1  巳 2
 * 巳 1  卯 1  丑 2  未 2
 * 
 * 金    火    水    土
 * 
 * 順時
 * 子 -> 寅 -> 辰 -> 午 -> 申 -> 戌
 * 
 * 逆時
 * 未 -> 巳 -> 卯 -> 丑 -> 亥 -> 酉
 * 
 *
 */
import {CoinSymbol} from './coinSet';
import {FIVE_EL} from './fiveElement';
import {EARTH_SYMBOL, FIVE_ELEMENT} from './enum_data';
import * as EARTH_FIVE_MAP from './earthFiveMap';
export default class FourRES {
  private symbolSet: CoinSymbol[];
  private earthSYM: EARTH_SYMBOL[] = [];
  private fiveElements: FIVE_ELEMENT[] = [];
  private mainElement: FIVE_ELEMENT = FIVE_ELEMENT.金;
  private isPos: boolean = false;
  constructor(symbolSet: CoinSymbol[]) {
    this.symbolSet = [...symbolSet];
    this.classify(symbolSet);
    this.setFiveEles();
  }

  public setEarthSYM(earthSYMs: EARTH_SYMBOL[]){
    this.earthSYM = [];
    this.earthSYM = [...earthSYMs];
    this.setFiveEles();
  }

  public setFiveEles() {
    this.fiveElements = this.earthSYM.map(sym=> {
      return EARTH_FIVE_MAP.getFiveFromMap(sym);
    });
  }

  public getFiveEles(): FIVE_ELEMENT[] {
    return this.fiveElements;
  } 

  public getFiveElesSYM(): string {
    let fiveElementsStrs = this.fiveElements.map(item=>FIVE_ELEMENT[item]);
    return fiveElementsStrs.reduce((curSYM, nextSYM)=>{
      return curSYM+"->"+nextSYM;
    });
  }
  
  classify(symbolSet: CoinSymbol[]) {
    let [first, second, third] = symbolSet;
    let conditionText = first + "" + second + "" + third;
    switch(conditionText) {
      
      case CoinSymbol["|"] + "" + CoinSymbol["||"] + ""+CoinSymbol["||"]:
        this.earthSYM.push(EARTH_SYMBOL.申);
        this.earthSYM.push(EARTH_SYMBOL.午);
        this.earthSYM.push(EARTH_SYMBOL.辰);
        this.mainElement = FIVE_ELEMENT.金;
        this.isPos = true;
        break;
      case CoinSymbol["||"] + "" + CoinSymbol["|"] + ""+CoinSymbol["||"]:
        this.earthSYM.push(EARTH_SYMBOL.午);
        this.earthSYM.push(EARTH_SYMBOL.辰);
        this.earthSYM.push(EARTH_SYMBOL.寅);
        this.mainElement = FIVE_ELEMENT.水;
        this.isPos = true;
        break;
      case CoinSymbol["|"] + "" + CoinSymbol["|"] + ""+CoinSymbol["||"]:
        this.earthSYM.push(EARTH_SYMBOL.辰);
        this.earthSYM.push(EARTH_SYMBOL.寅);
        this.earthSYM.push(EARTH_SYMBOL.子);
        this.mainElement = FIVE_ELEMENT.木;
        this.isPos = true;
        break;
      case CoinSymbol["|"] + "" + CoinSymbol["|"] + ""+CoinSymbol["|"]:
        this.earthSYM.push(EARTH_SYMBOL.辰);
        this.earthSYM.push(EARTH_SYMBOL.寅);
        this.earthSYM.push(EARTH_SYMBOL.子);
        this.mainElement = FIVE_ELEMENT.金;
        this.isPos = true;
        break;
      case CoinSymbol["||"] + "" + CoinSymbol["|"] + ""+CoinSymbol["|"]:
        this.earthSYM.push(EARTH_SYMBOL.丑);
        this.earthSYM.push(EARTH_SYMBOL.卯);
        this.earthSYM.push(EARTH_SYMBOL.巳);
        this.mainElement = FIVE_ELEMENT.金;
        this.isPos = false;
        break;
      case CoinSymbol["|"] + "" + CoinSymbol["||"] + ""+CoinSymbol["|"]:
        this.earthSYM.push(EARTH_SYMBOL.亥);
        this.earthSYM.push(EARTH_SYMBOL.酉);
        this.earthSYM.push(EARTH_SYMBOL.卯);
        this.mainElement = FIVE_ELEMENT.火;
        this.isPos = false;
        break;
      case CoinSymbol["|"] + "" + CoinSymbol["|"] + ""+CoinSymbol["||"]:
        this.earthSYM.push(EARTH_SYMBOL.酉);
        this.earthSYM.push(EARTH_SYMBOL.亥);
        this.earthSYM.push(EARTH_SYMBOL.丑);
        this.mainElement = FIVE_ELEMENT.水;
        this.isPos = false;
        break;
      default:
        this.earthSYM.push(EARTH_SYMBOL.卯);
        this.earthSYM.push(EARTH_SYMBOL.巳);
        this.earthSYM.push(EARTH_SYMBOL.未);
        this.mainElement = FIVE_ELEMENT.土;
        this.isPos = false;
        break;
    }
  }

  public getSymBolSet(): CoinSymbol[] {
    return this.symbolSet;
  }

  public getSymBolSetLabel(): string {
    let symbolSetString = this.symbolSet.map(item=> CoinSymbol[item]);
    return symbolSetString.reduce((itemCur, itemNext) => {
      return itemCur + '->' +  itemNext;
    });
  }

  public getEarthSymBolSet(): string {
    let symBolSetString = this.earthSYM.map(item=>{ return EARTH_SYMBOL[item]});
    return symBolSetString.reduce((itemCur, itemNext)=>{
      return itemCur + itemNext;
    });
  }

  public getEarthSYM(): EARTH_SYMBOL[] {
    return this.earthSYM;
  }

  public getMainElement(): FIVE_ELEMENT {
    return this.mainElement;
  }

  public checkPos():boolean {
    return this.isPos;
  }
}