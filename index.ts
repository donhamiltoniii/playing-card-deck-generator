import DeckGenerator from './lib/DeckGenerator'

const standardDeck: String[] = new DeckGenerator().generate(['♤', '♡', '♧', '♢'], ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'])

export { standardDeck }
export default DeckGenerator
