import symbolWord from './symbolWord';
import {FIVE_ELEMENT} from './enum_data';

const WORDSET_LEN = 5;
const FIVE_EL: Array<symbolWord> = [];
for (let i = 0 ; i < WORDSET_LEN; i++) {
  let currentWord = new symbolWord({symbol: FIVE_ELEMENT[i]});
  FIVE_EL.push(currentWord);
}

FIVE_EL.forEach((symbol, index)=>{
  let increase = (index+1)%WORDSET_LEN;
  let decrease = ((index+2)%WORDSET_LEN) < 0 ? ((index+2)%WORDSET_LEN)+WORDSET_LEN : ((index+2)%WORDSET_LEN);
  symbol.setOrder(FIVE_EL[increase]);
  symbol.setReverse(FIVE_EL[decrease]);
});

const transversal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    current = current.next();
    counter--;
  } while(current.hasOwnProperty('order') && counter>0);
  return current;
};


const antiVersal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    current = current.reverseOrder();
    counter--;
  } while(current.hasOwnProperty('reverse') && counter>0);
  return current;
};

export {FIVE_EL, transversal, antiVersal};