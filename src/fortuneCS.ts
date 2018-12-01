import BaseSet from './baseSet';
import upBaseSet from './upBaseSet';
import CoinSet from './coinSet';
import {CoinSymbol} from './coinSet';
import {FIVE_ELEMENT} from './enum_data';
import FourRES  from './fourResponse';

export default class FortuneCS {
  private upbsSet: upBaseSet; 
  private bsSet: BaseSet; 
  private eventNum: number = 0;
  private corEventNum: number = 0;
  private mainElement: FIVE_ELEMENT = FIVE_ELEMENT.金;
  constructor(coinSet: CoinSet[][]){
    let [upPart, downPart] = coinSet;
    this.upbsSet = new upBaseSet(upPart);
    this.bsSet = new BaseSet(downPart);
    this.findEventPair();
  }

  public getUpBsSet(): upBaseSet{
    return this.upbsSet;
  }

  public getbsSet(): BaseSet{
    return this.bsSet;
  }

  public findEventPair() {
    let upBaseSymbol: CoinSymbol[] = this.upbsSet.getRealSetSymbol();
    let baseSymbol: CoinSymbol[] = this.bsSet.getRealSetSymbol();
    let resultCompare: string = "";
    for (let idx = 0; idx < 3; idx++) {
      if (upBaseSymbol[idx] == baseSymbol[idx]) {
        resultCompare += "O";
      }
      else {
        resultCompare += "X";
      }
    }   
    switch(resultCompare) {
      case "XXO":
        this.eventNum = 4;
        this.corEventNum = 1;
        break;
      case "XOO":
        this.eventNum = 5;
        this.corEventNum = 1;
        break;
      case "OOO":
        this.eventNum = 6;
        this.corEventNum = 3;
        break;
      case "OOX": 
        this.eventNum = 1;
        this.corEventNum = 4;
        break;
      case "OXX":
        this.eventNum = 2;
        this.corEventNum = 5;
        break;
      case "XXX":
        this.eventNum = 3;
        this.corEventNum = 6;
        break;
      case "OXO":
        this.eventNum = 3;
        this.corEventNum = 6;
        break;
      default: 
        this.eventNum = 4;
        this.corEventNum = 1;
        break;
    }
    switch(this.eventNum) {
      case 1:
      case 2:
      case 3:
      case 6:
        this.mainElement = this.upbsSet.getBasicSet().getMainElement();
        break;
      case 4:
      case 5:
        let baseSymbol: CoinSymbol[] = this.getbsSet().getRealSetSymbol();
        let convertedSymbols: CoinSymbol[] = this.switchSymbol(baseSymbol);
        let computeFourRes = new FourRES(convertedSymbols);
        this.mainElement = computeFourRes.getMainElement();
        break;
    }
  }

  public switchSymbol(inputSymbols: CoinSymbol[]): CoinSymbol[] {
    return inputSymbols.map(item => {
      switch(item) {
        case CoinSymbol["|"]:
          return CoinSymbol["||"];
        default:
          return CoinSymbol["|"];
      }
    });
  }

  public getMainElement(): FIVE_ELEMENT{
    return this.mainElement;
  }

  public getEventNum():number{
    return this.eventNum;
  }

  public getCorEventNum(): number{
    return this.corEventNum;
  }
}
