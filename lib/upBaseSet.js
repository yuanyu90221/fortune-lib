"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fourResponse_1 = __importDefault(require("./fourResponse"));
var OrderSetUtil = __importStar(require("./orderSet"));
var upBaseSet = /** @class */ (function (_super) {
    __extends(upBaseSet, _super);
    function upBaseSet(symbolSet) {
        var _this = _super.call(this, symbolSet) || this;
        var first = _this.getEarthSYM()[0];
        var newEarthSYMs = _this.getNext3EarthSYMs(first);
        _this.setEarthSYM(newEarthSYMs);
        _this.setFiveEles();
        return _this;
    }
    upBaseSet.prototype.getNext3EarthSYMs = function (first) {
        var newEARTHSYMs = [];
        var pushedSYM = first;
        var index = 0;
        if (this.checkPos()) {
            for (; index < 3; index++) {
                pushedSYM = OrderSetUtil.transferNextOrder(pushedSYM);
                newEARTHSYMs.push(pushedSYM);
            }
        }
        else {
            for (; index < 3; index++) {
                pushedSYM = OrderSetUtil.transferReverseOrder(pushedSYM);
                newEARTHSYMs.push(pushedSYM);
            }
        }
        return newEARTHSYMs;
    };
    return upBaseSet;
}(fourResponse_1.default));
exports.default = upBaseSet;