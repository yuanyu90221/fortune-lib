"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enum_data_1 = require("./enum_data");
exports.EARTH_SYMBOL = enum_data_1.EARTH_SYMBOL;
exports.SIX_RELATIVE_SYMBOL = enum_data_1.SIX_RELATIVE_SYMBOL;
var symbolStruct_1 = require("./symbolStruct");
exports.SYMBOL_CHAIN = symbolStruct_1.SYMBOL_CHAIN;
exports.transversal = symbolStruct_1.transversal;
exports.antiVersal = symbolStruct_1.antiVersal;
var sixRelative_1 = require("./sixRelative");
exports.SIX_REL = sixRelative_1.SIX_REL;
var SIX_RELATIVE = __importStar(require("./sixRelative"));
exports.SIX_RELATIVE = SIX_RELATIVE;
var fiveElement_1 = require("./fiveElement");
exports.FIVE_EL = fiveElement_1.FIVE_EL;
var FIVE_ELM = __importStar(require("./fiveElement"));
exports.FIVE_ELM = FIVE_ELM;
var coinSet_1 = require("./coinSet");
exports.CoinSymbol = coinSet_1.CoinSymbol;
exports.FaceSymbol = coinSet_1.FaceSymbol;
var coinSet_2 = __importDefault(require("./coinSet"));
exports.CoinSet = coinSet_2.default;
var earth_symbol_order = ["子", "寅", "辰", "午", "申", "戌"];
var earth_symbol_reverse = ["未", "巳", "卯", "丑", "亥", "酉"];
/**
 * @description getNextOrder
 *
 * @param {string} symbol
 */
var getNextOrder = function (symbol) {
    var idx = earth_symbol_order.indexOf(symbol);
    if (idx == -1) {
        throw symbol + " not in earth symbol order";
    }
    var currentIdx = (idx + 1) % earth_symbol_order.length;
    return earth_symbol_order[currentIdx];
};
exports.getNextOrder = getNextOrder;
/**
 * @description getNextReverseOrder
 *
 * @param {string} symbol
 */
var getNextReverseOrder = function (symbol) {
    var idx = earth_symbol_reverse.indexOf(symbol);
    if (idx == -1) {
        throw symbol + " not in earth symbol reverse order";
    }
    var currentIdx = (idx + 1) % earth_symbol_reverse.length;
    return earth_symbol_reverse[currentIdx];
};
exports.getNextReverseOrder = getNextReverseOrder;
