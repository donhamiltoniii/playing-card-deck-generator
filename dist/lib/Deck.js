"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(require("./Card"));
var Deck = /** @class */ (function () {
    function Deck(suits, values) {
        var _this = this;
        if (suits === void 0) { suits = []; }
        if (values === void 0) { values = []; }
        this.cards = [];
        this.suits = suits;
        this.values = values;
        this.suits.forEach(function (suit) {
            _this.values.forEach(function (value) {
                _this.addCard(new Card_1.default(value, suit));
            });
        });
    }
    Deck.prototype.getCards = function () {
        return this.cards;
    };
    Deck.prototype.addCard = function (card) {
        this.cards.push(card);
    };
    Deck.prototype.getCardValues = function () {
        var cardValues = [];
        this.getCards().forEach(function (card) {
            cardValues.push(card.getValue());
        });
        return cardValues;
    };
    return Deck;
}());
exports.default = Deck;
