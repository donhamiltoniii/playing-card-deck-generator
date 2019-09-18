"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card = /** @class */ (function () {
    function Card(value, suit) {
        this.suit = suit;
        this.value = value;
    }
    Card.prototype.getValue = function () {
        return "" + this.value + this.suit;
    };
    return Card;
}());
exports.default = Card;
