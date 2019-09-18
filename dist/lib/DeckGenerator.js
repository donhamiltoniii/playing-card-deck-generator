"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Deck_1 = __importDefault(require("./Deck"));
var DeckGenerator = /** @class */ (function () {
    function DeckGenerator() {
    }
    DeckGenerator.generateDeck = function (suits, values) {
        return new Deck_1.default(suits, values);
    };
    return DeckGenerator;
}());
exports.default = DeckGenerator;
