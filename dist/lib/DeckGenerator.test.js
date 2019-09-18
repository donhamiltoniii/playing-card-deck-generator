"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DeckGenerator_1 = __importDefault(require("./DeckGenerator"));
describe('DeckGenerator', function () {
    describe('generateDeck', function () {
        test('should return a valid deck', function () {
            var underTest = DeckGenerator_1.default.generateDeck([], []);
            var deck = underTest.getCardValues();
            expect(deck instanceof Array).toBeTruthy();
        });
        test('given spades as a suit and 2 and 3 as values, should generate a `Deck` with 2 `Card`s', function () {
            var underTest = DeckGenerator_1.default.generateDeck(['♤'], ['2', '3']);
            var deck = underTest.getCardValues();
            expect(deck).toContain('2♤');
            expect(deck).toContain('3♤');
        });
        test('given 🔴 as a suit and 2 and 3 as values, should generate a deck of 2 cards', function () {
            var underTest = DeckGenerator_1.default.generateDeck(['🔴'], ['2', '3']);
            var deck = underTest.getCardValues();
            expect(deck).toContain('2🔴');
            expect(deck).toContain('3🔴');
        });
    });
});
