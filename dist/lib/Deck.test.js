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
});
