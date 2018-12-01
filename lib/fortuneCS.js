"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var baseSet_1 = __importDefault(require("./baseSet"));
var upBaseSet_1 = __importDefault(require("./upBaseSet"));
var coinSet_1 = require("./coinSet");
var enum_data_1 = require("./enum_data");
var fourResponse_1 = __importDefault(require("./fourResponse"));
var FortuneCS = /** @class */ (function () {
    function FortuneCS(coinSet) {
        this.eventNum = 0;
        this.corEventNum = 0;
        this.isReturnElement = false;
        this.mainElement = enum_data_1.FIVE_ELEMENT.金;
        this.checkSIXmap = {};
        var upPart = coinSet[0], downPart = coinSet[1];
        this.upbsSet = new upBaseSet_1.default(upPart);
        this.bsSet = new baseSet_1.default(downPart);
        this.findEventPair();
    }
    FortuneCS.prototype.getUpBsSet = function () {
        return this.upbsSet;
    };
    FortuneCS.prototype.getbsSet = function () {
        return this.bsSet;
    };
    FortuneCS.prototype.findEventPair = function () {
        var upBaseSymbol = this.upbsSet.getRealSetSymbol();
        var baseSymbol = this.bsSet.getRealSetSymbol();
        var resultCompare = "";
        for (var idx = 0; idx < 3; idx++) {
            if (upBaseSymbol[idx] == baseSymbol[idx]) {
                resultCompare += "O";
            }
            else {
                resultCompare += "X";
            }
        }
        switch (resultCompare) {
            case "XXO":
                this.eventNum = 4;
                this.corEventNum = 1;
                break;
            case "XOO":
                this.eventNum = 5;
                this.corEventNum = 1;
                break;
            case "OOO":
                this.eventNum = 6;
                this.corEventNum = 3;
                break;
            case "OOX":
                this.eventNum = 1;
                this.corEventNum = 4;
                break;
            case "OXX":
                this.eventNum = 2;
                this.corEventNum = 5;
                break;
            case "XXX":
                this.eventNum = 3;
                this.corEventNum = 6;
                break;
            case "OXO":
                this.eventNum = 3;
                this.corEventNum = 6;
                this.isReturnElement = true;
                break;
            default:
                this.eventNum = 4;
                this.corEventNum = 1;
                break;
        }
        switch (this.eventNum) {
            case 1:
            case 2:
            case 3:
            case 6:
                if (this.isReturnElement) {
                    this.mainElement = this.bsSet.getBasicSet().getMainElement();
                }
                else {
                    this.mainElement = this.upbsSet.getBasicSet().getMainElement();
                }
                break;
            case 4:
            case 5:
                var baseSymbol_1 = this.getbsSet().getRealSetSymbol();
                var convertedSymbols = this.switchSymbol(baseSymbol_1);
                var computeFourRes = new fourResponse_1.default(convertedSymbols);
                this.mainElement = computeFourRes.getMainElement();
                break;
        }
        this.setupSixMap(this.mainElement);
        this.bsSet.getBasicSet().setupSixRes(this.checkSIXmap);
        this.upbsSet.getBasicSet().setupSixRes(this.checkSIXmap);
        this.setMovedSixRes(this.bsSet);
        this.setMovedSixRes(this.upbsSet);
    };
    FortuneCS.prototype.setMovedSixRes = function (bsSet) {
        if (this.bsSet.checkMoved()) {
            var bsMovedSet = this.bsSet.getMovedSet();
            if (bsMovedSet != null) {
                bsMovedSet.setupSixRes(this.checkSIXmap);
            }
        }
    };
    FortuneCS.prototype.switchSymbol = function (inputSymbols) {
        return inputSymbols.map(function (item) {
            switch (item) {
                case coinSet_1.CoinSymbol["|"]:
                    return coinSet_1.CoinSymbol["||"];
                default:
                    return coinSet_1.CoinSymbol["|"];
            }
        });
    };
    FortuneCS.prototype.setupSixMap = function (startElem) {
        var startSix = enum_data_1.SIX_RELATIVE_SYMBOL.兄;
        var startFive = startElem;
        for (var idx = 0; idx < 5; idx++) {
            this.checkSIXmap[(startFive + idx) % 5] = (startSix + idx) % 5;
        }
    };
    FortuneCS.prototype.getMainElement = function () {
        return this.mainElement;
    };
    FortuneCS.prototype.getEventNum = function () {
        return this.eventNum;
    };
    FortuneCS.prototype.getCorEventNum = function () {
        return this.corEventNum;
    };
    return FortuneCS;
}());
exports.default = FortuneCS;
