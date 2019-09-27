import DeckFactory from './DeckFactory'
import Card from './Card'
import Deck from './Deck'

const standardDeck: Deck = DeckFactory.build(
  ['♤', '♡', '♧', '♢'],
  ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
)

export { standardDeck, Card, Deck, DeckFactory }
