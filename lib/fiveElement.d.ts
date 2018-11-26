import symbolWord from './symbolWord';
import { FIVE_ELEMENT } from './enum_data';
declare const FIVE_EL: Array<symbolWord>;
declare const transversal: (input: symbolWord, step: number) => symbolWord;
declare const antiVersal: (input: symbolWord, step: number) => symbolWord;
export { FIVE_EL, transversal, antiVersal, FIVE_ELEMENT };
