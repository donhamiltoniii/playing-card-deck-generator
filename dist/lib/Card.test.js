"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(require("./Card"));
describe('Card', function () {
    describe('getValue', function () {
        test('should return string value of Card.suit and Card.value', function () {
            var underTest = new Card_1.default('2', '🔴');
            var cardValue = underTest.getValue();
            expect(cardValue).toBe('2🔴');
        });
    });
});
