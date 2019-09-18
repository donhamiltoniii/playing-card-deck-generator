import DeckGenerator from './lib/DeckGenerator'
import Card from './lib/Card'
import Deck from './lib/Deck'

const standardDeck: DeckGenerator = DeckGenerator.generateDeck(
  ['♤', '♡', '♧', '♢'],
  ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
)

export { Card, Deck, standardDeck }
export default DeckGenerator
