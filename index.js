"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DeckGenerator_1 = __importDefault(require("./lib/DeckGenerator"));
var standardDeck = new DeckGenerator_1.default().generate(['♤', '♡', '♧', '♢'], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']);
exports.standardDeck = standardDeck;
exports.default = DeckGenerator_1.default;
