'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Card = /** @class */ (function () {
    function Card(value, suit) {
        this.suit = suit;
        this.value = value;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getValue = function () {
        return this.value;
    };
    Card.prototype.getCardValue = function () {
        return [this.value, this.suit];
    };
    return Card;
}());

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
                _this.addCard(new Card(value, suit));
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
            cardValues.push(card.getCardValue());
        });
        return cardValues;
    };
    Deck.prototype.shuffle = function () {
        var newDeck = [];
        for (var i = 0; i < this.cards.length; i++) {
            var rand = Math.floor(Math.random() * (i + 1));
            newDeck[i] = newDeck[rand];
            newDeck[rand] = this.cards[i];
        }
        this.cards = newDeck;
    };
    return Deck;
}());

var DeckGenerator = /** @class */ (function () {
    function DeckGenerator() {
    }
    DeckGenerator.build = function (suits, values) {
        return new Deck(suits, values);
    };
    return DeckGenerator;
}());

var standardDeck = DeckGenerator.build(['♤', '♡', '♧', '♢'], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);

exports.Card = Card;
exports.Deck = Deck;
exports.DeckFactory = DeckGenerator;
exports.standardDeck = standardDeck;
