import BaseSet from './baseSet';
import upBaseSet from './upBaseSet';
import CoinSet from './coinSet';
import { CoinSymbol } from './coinSet';
import { FIVE_ELEMENT } from './enum_data';
export default class FortuneCS {
    private upbsSet;
    private bsSet;
    private eventNum;
    private corEventNum;
    private mainElement;
    constructor(coinSet: CoinSet[][]);
    getUpBsSet(): upBaseSet;
    getbsSet(): BaseSet;
    findEventPair(): void;
    switchSymbol(inputSymbols: CoinSymbol[]): CoinSymbol[];
    getMainElement(): FIVE_ELEMENT;
    getEventNum(): number;
    getCorEventNum(): number;
}
