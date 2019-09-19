import DeckGenerator from './DeckGenerator'
import Deck from './Deck'

describe('DeckGenerator', () => {
  describe('generateDeck', () => {
    test('should return a valid deck', () => {
      const underTest: Deck = DeckGenerator.generateDeck([], [])

      const deck = underTest.getCardValues()

      expect(deck instanceof Array).toBeTruthy()
    })

    test('given spades as a suit and 2 and 3 as values, should generate a `Deck` with 2 `Card`s', () => {
      const underTest: Deck = DeckGenerator.generateDeck(['♤'], ['2', '3'])

      const deck = underTest.getCardValues()

      expect(deck).toContain('2♤')
      expect(deck).toContain('3♤')
    })

    test('given 🔴 as a suit and 2 and 3 as values, should generate a deck of 2 cards', () => {
      const underTest: Deck = DeckGenerator.generateDeck(['🔴'], ['2', '3'])

      const deck = underTest.getCardValues()

      expect(deck).toContain('2🔴')
      expect(deck).toContain('3🔴')
    })
  })
})
