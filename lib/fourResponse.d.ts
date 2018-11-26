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
 * 子 -> 寅 -> 辰 -> 午 -> 申 -> 卯
 *
 * 逆時
 * 未 -> 巳 -> 卯 -> 丑 -> 亥 -> 酉
 *
 *
 */
import { CoinSymbol } from './coinSet';
import { EARTH_SYMBOL, FIVE_ELEMENT } from './enum_data';
export default class FourRES {
    private symbolSet;
    private earthSYM;
    private fiveElements;
    private mainElement;
    private isPos;
    constructor(symbolSet: CoinSymbol[]);
    setFiveEles(): void;
    getFiveEles(): FIVE_ELEMENT[];
    getFiveElesSYM(): string;
    classify(symbolSet: CoinSymbol[]): void;
    getSymBolSet(): CoinSymbol[];
    getSymBolSetLabel(): string;
    getEarthSymBolSet(): string;
    getEarthSYM(): EARTH_SYMBOL[];
    getMainElement(): FIVE_ELEMENT;
    checkPos(): boolean;
}
