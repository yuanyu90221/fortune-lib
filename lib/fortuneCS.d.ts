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
    private isReturnElement;
    private mainElement;
    private checkSIXmap;
    private fortuneNum;
    constructor(coinSet: CoinSet[][]);
    getUpBsSet(): upBaseSet;
    getbsSet(): BaseSet;
    findEventPair(): void;
    setFortuneNum(): void;
    getFortuneNum(): number;
    setMovedSixRes(bsSet: BaseSet): void;
    switchSymbol(inputSymbols: CoinSymbol[]): CoinSymbol[];
    setupSixMap(startElem: FIVE_ELEMENT): void;
    getMainElement(): FIVE_ELEMENT;
    getEventNum(): number;
    getCorEventNum(): number;
}
