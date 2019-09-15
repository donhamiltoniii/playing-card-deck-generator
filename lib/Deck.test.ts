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
})
