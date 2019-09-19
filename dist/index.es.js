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

var DeckGenerator = /** @class */ (function () {
    function DeckGenerator() {
    }
    DeckGenerator.generateDeck = function (suits, values) {
        return new Deck(suits, values);
    };
    return DeckGenerator;
}());

var standardDeck = DeckGenerator.generateDeck(['♤', '♡', '♧', '♢'], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);

export { Card, Deck, DeckGenerator, standardDeck };
