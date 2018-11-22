import symbolWord from './symbolWord';
import {SIX_RELATIVE_SYMBOL} from './enum_data';


const WORDSET_LEN = 5;
const SIX_REL: Array<symbolWord> = [];
for (let i = 0 ; i < WORDSET_LEN; i++) {
  let currentWord = new symbolWord({symbol: SIX_RELATIVE_SYMBOL[i]});
  SIX_REL.push(currentWord);
}

SIX_REL.forEach((symbol, index)=>{
  let increase = (index+1)%WORDSET_LEN;
  let decrease = ((index+2)%WORDSET_LEN) < 0 ? ((index+2)%WORDSET_LEN)+WORDSET_LEN : ((index+2)%WORDSET_LEN);
  symbol.setOrder(SIX_REL[increase]);
  symbol.setReverse(SIX_REL[decrease]);
});

const transversal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    let symbol = current.getSymbol();
    current = current.next();
    counter--;
  } while(current.hasOwnProperty('order') && counter>0);
  return current;
};


const antiVersal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    let symbol = current.getSymbol();
    current = current.reverseOrder();
    counter--;
  } while(current.hasOwnProperty('reverse') && counter>0);
  return current;
};

export {SIX_REL, antiVersal, transversal};