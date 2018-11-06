import symbolWord from './symbolWord';

let first = new symbolWord({symbol:'子'});
let second = new symbolWord({symbol:'丑'});
let third = new symbolWord({symbol:'寅'});
let four = new symbolWord({symbol:'卯'});


first.setOrder(second);
second.setOrder(third);
third.setOrder(four);
four.setOrder(first);


// third.setOrder(first);
third.setReverse(second);
second.setReverse(first);
first.setReverse(third);
const transversal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    let symbol = current.getSymbol();
    console.log(`symbol:${symbol}`);
    current = current.next();
    counter--;
  } while(current.hasOwnProperty('order') && counter>0);
};
transversal(first,10);

const antiVersal = (input: symbolWord, step: number) => {
  let current = input;
  let counter = step;
  do {
    let symbol = current.getSymbol();
    console.log(`symbol:${symbol}`);
    current = current.reverseOrder();
    counter--;
  } while(current.hasOwnProperty('reverse') && counter>0);
};
console.log('====');
antiVersal(third,2);