"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Deck_1 = __importDefault(require("./Deck"));
describe('Deck', function () {
    describe('getCardsValues', function () {
        test('should return an Array of Cards', function () {
            var underTest = new Deck_1.default(['♤'], ['2']);
            var cards = underTest.getCardValues();
            expect(cards).toContain('2♤');
        });
    });
    describe('dealTopCard', function () {
        test('should throw error if the deck is empty', function () {
            var underTest = new Deck_1.default([], []);
            expect(function () {
                underTest.dealTopCard();
            }).toThrow('No cards left in the Deck');
        });
        test('should remove one card from the deck', function () {
            var underTest = new Deck_1.default(['♤'], ['2', '3']);
            var initialCardLength = underTest.getCards().length;
            underTest.dealTopCard();
            var cardLengthAfterDealing = underTest.getCards().length;
            expect(cardLengthAfterDealing).toEqual(initialCardLength - 1);
        });
        test('should return top card (first index) in Deck', function () {
            var underTest = new Deck_1.default(['♤'], ['2', '3']);
            var topCard = underTest.getCards()[0];
            var dealtCard = underTest.dealTopCard();
            expect(topCard).toBe(dealtCard);
        });
    });
    describe('shuffle', function () {
        describe('should not be the same as initial collection', function () {
            var underTest = new Deck_1.default(['♤', '♢'], ['2', '3', '4']);
            var originalCards = underTest.getCards();
            underTest.shuffle();
            var shuffledCards = underTest.getCards();
            expect(shuffledCards).not.toEqual(originalCards);
        });
    });
});
