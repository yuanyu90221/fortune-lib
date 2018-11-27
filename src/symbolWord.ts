export default class symbolWord {

  private symbol: string = '';
  private reverse: any;
  private order: any;
  constructor({symbol='', reverse = {}, order = {}}) {
    this.symbol = symbol;
    this.reverse = reverse;
    this.order = order;
  }
  public next() {
    return this.order;
  }
  public getSymbol() {
    return this.symbol;
  }
  public reverseOrder() {
    return this.reverse;
  }

  public setOrder(order = {}) {
    this.order = order;
  }
  public setReverse(reverse = {}){
    this.reverse = reverse;
  }
}