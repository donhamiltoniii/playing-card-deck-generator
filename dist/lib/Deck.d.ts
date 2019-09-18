import Card from './Card';
declare class Deck {
    private cards;
    private suits;
    private values;
    getCards(): Card[];
    constructor(suits?: string[], values?: string[]);
    addCard(card: Card): void;
    getCardValues(): string[];
}
export default Deck;
