import Card from './Card'

describe('Card', () => {
  describe('getValue', () => {
    test('should return string value of Card.suit and Card.value', () => {
      const underTest = new Card('2', '🔴')

      const cardValue = underTest.getValue()

      expect(cardValue).toBe('2🔴')
    })
  })
})
