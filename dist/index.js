"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DeckGenerator_1 = __importDefault(require("./lib/DeckGenerator"));
var Card_1 = __importDefault(require("./lib/Card"));
exports.Card = Card_1.default;
var Deck_1 = __importDefault(require("./lib/Deck"));
exports.Deck = Deck_1.default;
var standardDeck = DeckGenerator_1.default.generateDeck(['♤', '♡', '♧', '♢'], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
exports.standardDeck = standardDeck;
exports.default = DeckGenerator_1.default;
