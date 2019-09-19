declare class Card {
    private suit;
    private value;
    getValue(): string;
    constructor(value: string, suit: string);
}
export default Card;
