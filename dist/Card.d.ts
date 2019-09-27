declare class Card {
    private suit;
    private value;
    getSuit(): string;
    getValue(): string;
    constructor(value: string, suit: string);
    getCardValue(): string[];
}
export default Card;
