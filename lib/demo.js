"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
console.log("\u516D\u89AA");
var result = index_1.SIX_RELATIVE.antiVersal(index_1.SIX_REL[0], 1);
console.log(index_1.SIX_REL[0].getSymbol() + "剋" + result.getSymbol());
var result1 = index_1.SIX_RELATIVE.transversal(index_1.SIX_REL[0], 1);
console.log(index_1.SIX_REL[0].getSymbol() + "生" + result1.getSymbol());
