import Card from './Card'

class Deck {
  private cards: Card[]
  private suits: string[]
  private values: string[]

  public getCards(): Card[] {
    return this.cards
  }

  constructor(suits: string[], values: string[]) {
    this.cards = []
    this.suits = suits
    this.values = values
    this.suits.forEach(suit => {
      this.values.forEach(value => {
        this.addCard(new Card(suit, value))
      })
    })
  }

  public addCard(card: Card) {
    this.cards.push(card)
  }

  public getCardValues(): string[] {
    let cardValues: string[] = []
    this.getCards().forEach(card => {
      cardValues.push(card.getValue())
    })
    return cardValues
  }
}

export default Deck
