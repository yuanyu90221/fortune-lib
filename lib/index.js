"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_data_1 = require("./enum_data");
exports.EARTH_SYMBOL = enum_data_1.EARTH_SYMBOL;
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
