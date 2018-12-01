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
var symUtil = __importStar(require("./symbolStruct"));
exports.symUtil = symUtil;
var sixRelative_1 = require("./sixRelative");
exports.SIX_REL = sixRelative_1.SIX_REL;
var SIX_RELATIVE = __importStar(require("./sixRelative"));
exports.SIX_RELATIVE = SIX_RELATIVE;
var fiveElement_1 = require("./fiveElement");
exports.FIVE_EL = fiveElement_1.FIVE_EL;
exports.FIVE_ELEMENT = fiveElement_1.FIVE_ELEMENT;
var FIVE_ELM = __importStar(require("./fiveElement"));
exports.FIVE_ELM = FIVE_ELM;
var coinSet_1 = require("./coinSet");
exports.CoinSymbol = coinSet_1.CoinSymbol;
exports.FaceSymbol = coinSet_1.FaceSymbol;
var coinSet_2 = __importDefault(require("./coinSet"));
exports.CoinSet = coinSet_2.default;
var fourResponse_1 = __importDefault(require("./fourResponse"));
exports.FourRES = fourResponse_1.default;
var baseSet_1 = __importDefault(require("./baseSet"));
exports.BaseSet = baseSet_1.default;
var EARTH_FIVE_MAP = __importStar(require("./earthFiveMap"));
exports.EARTH_FIVE_MAP = EARTH_FIVE_MAP;
var orderSet_1 = require("./orderSet");
exports.EARTH_SYMBOL_ORDER = orderSet_1.EARTH_SYMBOL_ORDER;
exports.EARTH_SYMBOL_REVERSE = orderSet_1.EARTH_SYMBOL_REVERSE;
var OrderSetUtil = __importStar(require("./orderSet"));
exports.OrderSetUtil = OrderSetUtil;
var upBaseSet_1 = __importDefault(require("./upBaseSet"));
exports.UpBaseSet = upBaseSet_1.default;
var fortuneCS_1 = __importDefault(require("./fortuneCS"));
exports.FortuneCS = fortuneCS_1.default;
var fortuneNumMap_1 = __importDefault(require("./fortuneNumMap"));
exports.FourtuneNumMap = fortuneNumMap_1.default;
var getFortuneResult = function (inputSet, timestamp) {
    var result = {};
    var finalResult = new fortuneCS_1.default(inputSet);
    var upbase = {};
    var downbase = {};
    var upbsSet = finalResult.getUpBsSet();
    var bsSet = finalResult.getbsSet();
    upbase = setBasicBase(upbsSet);
    downbase = setBasicBase(bsSet);
    result = {
        "upbase": upbase,
        "downbase": downbase,
        "fortuneNum": finalResult.getFortuneNum(),
        "event": finalResult.getEventNum(),
        "corEvent": finalResult.getCorEventNum(),
        "mainElem": finalResult.getMainElement()
    };
    return result;
};
exports.getFortuneResult = getFortuneResult;
var setBasicBase = function (baseSet) {
    var result = {};
    var movedSet = baseSet.getMovedSet();
    if (movedSet == null) {
        result = {
            "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
            "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
            "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
            "base": baseSet.getOrigSetSymbolLabel()
        };
    }
    else {
        result = {
            "earthSym": baseSet.getBasicSet().getEarthSymBolSet(),
            "fiveElem": baseSet.getBasicSet().getFiveElesSYM(),
            "sixRes": baseSet.getBasicSet().getSixResSymLabel(),
            "base": baseSet.getOrigSetSymbolLabel(),
            "movebase": {
                "earthSym": movedSet.getEarthSymBolSet(),
                "fiveElem": movedSet.getFiveElesSYM(),
                "sixRes": movedSet.getSixResSymLabel(),
                "base": baseSet.getMovedSymbolabel(),
            }
        };
    }
    return result;
};
