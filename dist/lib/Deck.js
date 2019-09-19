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
    Deck.prototype.dealTopCard = function () {
        var topCard = this.cards.shift();
        if (topCard === undefined)
            throw new Error('No cards left in the Deck');
        return topCard;
    };
    Deck.prototype.getCardValues = function () {
        var cardValues = [];
        this.getCards().forEach(function (card) {
            cardValues.push(card.getValue());
        });
        return cardValues;
    };
    Deck.prototype.shuffle = function () {
        var shuffledDeck = [];
        for (var i = this.cards.length - 1; i >= 0; i--) {
            var randomCard = this.cards[Math.floor(Math.random() * i)];
            shuffledDeck.push(randomCard);
        }
        this.cards = shuffledDeck;
    };
    return Deck;
}());
exports.default = Deck;
