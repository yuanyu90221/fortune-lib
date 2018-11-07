export default class symbolWord {
    private symbol;
    private reverse;
    private order;
    constructor({ symbol, reverse, order }: {
        symbol?: string | undefined;
        reverse?: {} | undefined;
        order?: {} | undefined;
    });
    next(): any;
    getSymbol(): String;
    reverseOrder(): any;
    setOrder(order?: {}): void;
    setReverse(reverse?: {}): void;
}
