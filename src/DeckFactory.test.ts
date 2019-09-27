import DeckFactory from './DeckFactory'
import Deck from './Deck'

describe('DeckFactory', () => {
  describe('build', () => {
    test('should return a valid deck', () => {
      const underTest: Deck = DeckFactory.build([], [])

      const deck = underTest.getCardValues()

      expect(deck instanceof Array).toBeTruthy()
    })

    test('given spades as a suit and 2 and 3 as values, should generate a `Deck` with 2 `Card`s', () => {
      const underTest: Deck = DeckFactory.build(['♤'], ['2', '3'])

      const deck = underTest.getCardValues()

      expect(deck).toContainEqual(['2', '♤'])
      expect(deck).toContainEqual(['3', '♤'])
    })

    test('given 🔴 as a suit and 2 and 3 as values, should generate a deck of 2 cards', () => {
      const underTest: Deck = DeckFactory.build(['🔴'], ['2', '3'])

      const deck = underTest.getCardValues()

      expect(deck).toContainEqual(['2', '🔴'])
      expect(deck).toContainEqual(['3', '🔴'])
    })
  })
})
