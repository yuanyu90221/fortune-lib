# fortune-lib

## 套件介紹

+ 一個用typescript 撰寫的 排掛 library

## 安裝環境

`npm i`

## 執行測試

`npm run test ${執行名稱}`

## 重新編譯

`npm run rebuild`

## 使用方式

```code
import {SIX_REL, SIX_RELATIVE} from 'fortune/lib';

let result = SIX_RELATIVE.antiVersal(SIX_REL[0], 1);
console.log(SIX_REL[0].getSymbol()+ "剋" + result.getSymbol());
let result1 = SIX_RELATIVE.transversal(SIX_REL[0], 1);
console.log(SIX_REL[0].getSymbol()+ "生" + result1.getSymbol());

```