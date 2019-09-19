import Card from './Card';
declare class Deck {
    private cards;
    private suits;
    private values;
    getCards(): Card[];
    constructor(suits?: string[], values?: string[]);
    private addCard;
    dealTopCard(): Card;
    getCardValues(): string[];
    shuffle(): void;
}
export default Deck;
