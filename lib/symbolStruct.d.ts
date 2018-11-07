import symbolWord from './symbolWord';
declare const SYMBOL_CHAIN: Array<symbolWord>;
declare const transversal: (input: symbolWord, step: number) => void;
declare const antiVersal: (input: symbolWord, step: number) => void;
export { SYMBOL_CHAIN, antiVersal, transversal };
