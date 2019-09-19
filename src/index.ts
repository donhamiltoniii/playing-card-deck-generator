import DeckGenerator from './DeckGenerator'
import Card from './Card'
import Deck from './Deck'

const standardDeck: Deck = DeckGenerator.generateDeck(
  ['♤', '♡', '♧', '♢'],
  ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
)

export { standardDeck, Card, Deck, DeckGenerator }
