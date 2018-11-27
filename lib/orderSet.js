"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enum_data_1 = require("./enum_data");
exports.EARTH_SYMBOL_ORDER = enum_data_1.EARTH_SYMBOL_ORDER;
exports.EARTH_SYMBOL_REVERSE = enum_data_1.EARTH_SYMBOL_REVERSE;
var ENUM_LEN = 6;
/**
 * @description getNextOrder
 *
 * @param {EARTH_SYMBOL_ORDER} symbol
 */
var getNextOrder = function (symbol) {
    return (++symbol) % ENUM_LEN;
};
exports.getNextOrder = getNextOrder;
/**
 * @description getNextReverseOrder
 *
 * @param {EARTH_SYMBOL_REVERSE} symbol
 */
var getNextReverseOrder = function (symbol) {
    return (--symbol + ENUM_LEN) % ENUM_LEN;
};
exports.getNextReverseOrder = getNextReverseOrder;
