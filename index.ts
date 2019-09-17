import DeckGenerator from './lib/DeckGenerator'
import Deck from './lib/Deck'
import Card from './lib/Card'

const standardDeck: DeckGenerator = new DeckGenerator(
  ['♤', '♡', '♧', '♢'],
  ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
)

export { Card, Deck, standardDeck }
export default DeckGenerator
