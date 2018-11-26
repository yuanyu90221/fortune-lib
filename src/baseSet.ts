import CoinSet from './coinSet';
import {CoinSymbol} from './coinSet';
import FourRES from './fourResponse';
export default class BaseSet {
  private basicSet: FourRES;
  private movedSet: FourRES|null = null;
  private orgSet: CoinSet[] = [];
  private orgSetSymbol: CoinSymbol[] = [];
  private movedSetSymbol: CoinSymbol[] = [];
  private realSetSymbol: CoinSymbol[] = [];

  constructor(orgSet: CoinSet[]) {
    this.orgSet = [...orgSet];
    let [first, second, third] = orgSet;
    this.orgSetSymbol = [first.getSymbol(), second.getSymbol(), third.getSymbol()];
    this.realSetSymbol = [first.getRealSymbol(), second.getRealSymbol(), third.getRealSymbol()];
    this.movedSetSymbol = [first.getMoveSymbol(), second.getMoveSymbol(), third.getMoveSymbol()];
    this.basicSet = new FourRES(this.realSetSymbol);  
    if (this.checkMoved()){
      this.movedSet = new FourRES(this.movedSetSymbol);
    }
  }
  public checkMoved(): boolean {
    let [first, second, third] = this.orgSet;
    return first.getRealSymbol()!==first.getMoveSymbol() || second.getRealSymbol()!==second.getMoveSymbol() 
    || third.getRealSymbol()!==third.getMoveSymbol(); 
  }
}