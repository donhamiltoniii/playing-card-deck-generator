"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DeckGenerator_1 = __importDefault(require("./DeckGenerator"));
describe('DeckGenerator', function () {
    test('given spades as a suit and 2 and 3 as values, should generate a deck of 2 cards', function () {
        var underTest = new DeckGenerator_1.default();
        var deck = underTest.generate(['♤'], ['2', '3']);
        expect(deck).toContain('2♤');
        expect(deck).toContain('3♤');
    });
    test('given 🔴 as a suit and 2 and 3 as values, should generate a deck of 2 cards', function () {
        var underTest = new DeckGenerator_1.default();
        var deck = underTest.generate(['🔴'], ['2', '3']);
        expect(deck).toContain('2🔴');
        expect(deck).toContain('3🔴');
    });
});
