import Deck from './Deck'
import Card from './Card'

describe('Deck', () => {
  describe('getCardsValues', () => {
    test('should return an Array of Cards', () => {
      const underTest = new Deck(['♤'], ['2'])

      const cards = underTest.getCardValues()

      expect(cards).toContain('2♤')
    })
  })

  describe('dealTopCard', () => {
    test('should throw error if the deck is empty', () => {
      const underTest = new Deck([], [])

      expect(() => {
        underTest.dealTopCard()
      }).toThrow('No cards left in the Deck')
    })

    test('should remove one card from the deck', () => {
      const underTest: Deck = new Deck(['♤'], ['2', '3'])

      const initialCardLength = underTest.getCards().length
      underTest.dealTopCard()
      const cardLengthAfterDealing = underTest.getCards().length

      expect(cardLengthAfterDealing).toEqual(initialCardLength - 1)
    })

    test('should return top card (first index) in Deck', () => {
      const underTest: Deck = new Deck(['♤'], ['2', '3'])

      const topCard = underTest.getCards()[0]
      const dealtCard = underTest.dealTopCard()

      expect(topCard).toBe(dealtCard)
    })
  })

  describe('shuffle', () => {
    test('should not be the same as initial collection', () => {
      const underTest: Deck = new Deck(
        ['♤', '♢', '♧', '♡'],
        ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
      )

      const originalCards: Card[] = underTest.getCards()
      underTest.shuffle()
      const shuffledCards: Card[] = underTest.getCards()

      expect(shuffledCards).not.toEqual(originalCards)
    })

    test('should not contain duplicates', () => {
      const underTest: Deck = new Deck(
        ['♤', '♢', '♧', '♡'],
        ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
      )

      const originalCardsLength: number = underTest.getCards().length
      underTest.shuffle()
      const shuffledCardsLength: number = new Set(underTest.getCards()).size

      expect(originalCardsLength).toEqual(shuffledCardsLength)
    })
  })
})
