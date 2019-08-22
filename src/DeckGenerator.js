"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeckGenerator = /** @class */ (function () {
    function DeckGenerator() {
    }
    DeckGenerator.prototype.generate = function (suits, values) {
        var deck = [];
        suits.forEach(function (suit) {
            values.forEach(function (value) {
                deck.push("" + value + suit);
            });
        });
        return deck;
    };
    return DeckGenerator;
}());
exports.default = DeckGenerator;
