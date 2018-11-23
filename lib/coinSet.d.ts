/**
 * 銅錢正反 處理:
 *
 * 反反反 -> X
 * 正反反 -> |
 * 正正反 -> ||
 * 正正正 -> O
 *
 */
declare enum CoinSymbol {
    'X' = 0,
    '|' = 1,
    '||' = 2,
    'O' = 3
}
declare enum FaceSymbol {
    FaceDown = 0,
    FaceUp = 1
}
export default class CoinSet {
    private faceSet;
    private coinSymbol;
    constructor(faceSet: FaceSymbol[]);
    private setSymbol;
    getSymbol(): CoinSymbol;
    getFaceSet(): FaceSymbol[];
    getRealSymbol(): CoinSymbol.X | CoinSymbol.| | CoinSymbol;
    getMoveSymbol(): CoinSymbol.X | CoinSymbol.| | CoinSymbol;
}
export { CoinSymbol, FaceSymbol };
